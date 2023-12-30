import { Alert, AlertIcon, Box, Button, Heading, Image } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import Navbar from "./navBar";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";
import {useDispatch} from "react-redux"
import { getUserName } from "../Redux/AuthReducer/action"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState(false)
    const { SetisAuth } = useContext(AuthContext)
    const [alerti, Setalerti] = useState(false)
    const [wc, Setwc] = useState(false)
    const dispatch=useDispatch()
    const [name, Setname] = useState("")
    let alt = ""

    let prevId = localStorage.getItem("locId") || undefined
    const handleLogin = () => {
        console.log(email, password)
        Setwc(false)
        axios.get(`https://koovs-api-data.onrender.com/users`)
            .then((req) => {
                console.log(req.data)
                let n=name
                req.data.forEach((ele) => {
                    if (ele.email === email && ele.password === password) {
                        Setname(ele.name)
                        n=ele.name
                        dispatch(getUserName(n))
                    }
                })
                if (n) {
                    setLoginStatus(true)
                    SetisAuth(true)
                } else {
                    Setwc(true)
                    Setname("")
                    // alert("Wrong Credentials")
                    setLoginStatus(false)
                }
            })
        const element = document.getElementById('log-Sec');
        element.scrollIntoView({ behavior: 'smooth' });

    }



    useEffect(() => {

    }, [loginStatus])

    if (loginStatus) {

        alt = (
            < Alert mt={2} status='success' alignItems='center'
                justifyContent='center'
                textAlign='center' variant='subtle' >
                <AlertIcon />
                Welcome {name}
            </Alert >
        )
        setTimeout(() => {
            Setalerti(true)
        }, 2000)


        // return <Navigate to={`/product/${prevId}`} />

    }
    else {
        if (wc) {
            alt = (
                < Alert mt={2} status='error' alignItems='center'
                    justifyContent='center'
                    textAlign='center' variant='subtle' >
                    <AlertIcon />
                    Wrong Credetial
                </Alert >
            )
            setTimeout(() => {
                Setwc(false)
            }, 2000)


        }
    }
    if (alerti) {
        if (prevId) {
            return <Navigate to={`/product/${prevId}`} />
        } else {
            return <Navigate to={"/"} />
        }
    }


    return (
        <Box id="log-Sec">
            <Navbar />
            {alt}
            <Heading fontWeight={"500"} textAlign={"center"} mt={39}>Login</Heading>
            <Box width={"60%"} display={"flex"} margin={"auto"} mt={"50px"} borderRadius={"10px"} p={10} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                <Box>
                    <Image src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" />
                </Box>
                <Box width={"60%"}>
                    <Image width={"50%"} display={"block"} margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU" />
                    <FormControl mt={30}>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        <FormLabel mt={5}>Password</FormLabel>
                        <Input type='password' placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button display={"block"} bgColor={"black"} onClick={handleLogin} color={"white"} margin={"auto"} mt={"50px"}>Submit</Button>
                        <Text mt={6} textAlign={"center"}>Not have a account? <Link to={"/signup"}>Sign up</Link></Text>
                    </FormControl>
                </Box>

            </Box>
        </Box>
    )
}

export default Login;