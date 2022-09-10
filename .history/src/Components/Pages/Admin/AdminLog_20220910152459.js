import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const AdminLog = () => {

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user !== ''){
                navigate('/addhome')
            }
        })
    },[])
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/home')
        })
        .catch((err) => alert(err.message));
    }
    

  return (
    <div className='login-page'>
    <div className='container'>
      <h1 className='h1'>Log In</h1> <br/><br/>
      <div className='form'>
      <label className="label">E-mail</label><br/><br/>
        <input 
        type="email"
        placeholder='Username...'
        autoComplete="off"
        onChange={handleEmailChange}
        value={email}
         />
         <br/><br/>
        <label className="label">Password</label><br/><br/>
        <input 
        type="password"
        placeholder='Password...'
        onChange={handlePasswordChange}
        value={password} 
        />
        <br/><br/>
        <button onClick={handleSignIn}>Log In</button> <br/><br/>
        
      </div>
    </div>
    </div>
  )
}
export default AdminLog
