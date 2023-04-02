import { Box, Button, Heading,Image } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react';
import Navbar from "./navBar";
// import { useContext } from "react";
// import { AuthContext } from "./Authcontext";
import { Navigate } from "react-router-dom";
function Login() {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
// const {SetisAuth,isAuth} = useContext(AuthContext);
    const CheckPass = ()=>{
// fetch(`https://lane-attire-product-api.onrender.com/users?q=${email}`)
// .then((res)=>res.json())
// .then((data)=>{
//     console.log("login",data)
// SetisAuth(data[0].password==password)
// })

    }
    if(isAuth){
        return <Navigate to="/" />
    }
    return (
        <Box>
            <Navbar/>
            <Heading fontWeight={"500"} textAlign={"center"} mt={39}>Login</Heading>
            <Box width={"60%"} display={"flex"} margin={"auto"} mt={"50px"} borderRadius={"10px"} p={10} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                <Box>
                    <Image src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg"/>
                </Box>
                <Box width={"60%"}>
                    <Image width={"50%"} display={"block"} margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU"/>
                    <FormControl mt={30}>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder="Enter your Email" value={email} />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        <FormLabel mt={5}>Password</FormLabel>
                        <Input type='password' value={password} placeholder="Enter your Password" />
                        <Button display={"block"} onClick={CheckPass} bgColor={"black"} color={"white"} margin={"auto"} mt={"50px"}>Submit</Button>
                    </FormControl>
                </Box>

            </Box>
        </Box>
    )
}

export default Login;

// https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg