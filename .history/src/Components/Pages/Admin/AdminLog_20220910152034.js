import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const AdminLog = () => {

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate = useNavigate();

    
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
        <h1>Register</h1>
        <div className='form'>
         <input
         className='input'
              type="email"
              placeholder="Email"
              value={registerInformation.email}
              onChange={(e) => 
              setRegisterInformation({...registerInformation, email: e.target.value})} />
            
            
            <input
              type="email"
              placeholder="Confirm Email"
              value={registerInformation.confirmEmail}
              onChange={(e) => 
              setRegisterInformation({...registerInformation, confirmEmail: e.target.value})} />
            
          
            <input
              type="password"
              placeholder="Password"
              value={registerInformation.password}
              onChange={(e) => 
                setRegisterInformation({...registerInformation, password: e.target.value})} />
              
            
            <input
              type="password"
              placeholder="Confirm Password"
              value={registerInformation.confirmPassword}
              onChange={(e) => 
                setRegisterInformation({...registerInformation, confirmPassword: e.target.value})} />
              
            <button className="sign-in-register-button" onClick={handleRegister}>Register</button><br/><br/>
            <button className="create-account-button" onClick={ handleBack}>Go back</button>
            
         
    </div>
    </div>
  )
}
export default AdminLog

import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import '../styles/register.css';

export default function Register() {
    
   
    const navigate = useNavigate();
    const [registerInformation, setRegisterInformation] = useState({
        email: " ",
        confirmEmail: "",
        password: "",
        confirmPassword:"",
    })

    const handleBack =() => {
        navigate('/')
    }
    const handleRegister = () => {
        if(registerInformation.email !== registerInformation.confirmEmail  ){
            alert("Email  doen not match")
            return
        }else if (registerInformation.password !== registerInformation.confirmPassword){
            alert(" Password doen not match")
            return
        }
        createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password).then(() => {
            navigate('/');
        })
        .catch((err) => alert(err.message));

    };

  return (
   
  )
}