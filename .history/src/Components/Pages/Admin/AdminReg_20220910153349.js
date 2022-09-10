import { View, Text } from 'react-native'
import React from 'react'

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