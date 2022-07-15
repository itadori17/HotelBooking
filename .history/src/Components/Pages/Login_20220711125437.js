import React, {useState, useEffect} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./firebase"
import { useNavigate} from "react-router-dom";


export default function Welcome() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                navigate('/home')
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
    const handleRegister =() =>{
        navigate('/register')
    }

  return (
    <div className='login-page'>
    <div className='container'>
      <h1 className='h1'>Log In</h1> <br/><br/>
      <div className='login-register-container'>
      <label className="label">E-mail</label><br/><br/>
        <input 
        type="email"
        placeholder='Enter Email...'
        autoComplete="off"
        onChange={handleEmailChange}
        value={email}
         />
         <br/><br/>
        <label className="label">Password</label><br/><br/>
        <input 
        type="password"
        placeholder='Enter Password...'
        onChange={handlePasswordChange}
        value={password} 
        />
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleRegister}>Create an Account</button>
      </div>
    </div>
    </div>
  )
}