import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';'

export default function AdminReg() {

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
    <View>
      <Text>AdminReg</Text>
    </View>
  )
}