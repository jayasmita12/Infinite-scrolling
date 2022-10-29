import React from 'react'
import "../style/login.css"
import { FormControl, FormLabel, Input , Button, Heading,Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from "../context/AuthContext"
import { useContext } from 'react'

export const Login = () => {
    const [token,setToken]=useContext(AuthContext)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate = useNavigate()
    
    const LoginHandler = ()=>{
        setError("")
        setPassword("")
        setUsername("")
        axios("https://fakestoreapi.com/auth/login",{
            method:"post",
            data:({
                username:username,
                password:password
            })
        })
        
        .then(res=>{
            console.log(res.data)
            setToken(res.data.token)
            setToken(false)
            console.log(token)
            localStorage.setItem("userToken",res.data.token)
            alert("Login Succesful.")
            navigate("/infinite-scroll")
        })
        .catch(err=>{
            setError(err.response.data)
        })
    }

    return (
        <div className="login-div">
            <FormControl>
                <Heading className='login-heading'>Login Form</Heading>
                <FormLabel>* Email address</FormLabel>
                <Input type='email' placeholder='Enter email' onChange={(e)=>{setUsername(e.target.value)}}/>
                <FormLabel>* Password</FormLabel>
                <Input type='password' placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
                {error ?  <Text className='error'>{error}</Text> : "" }
                <Button className='login-btn' onClick={LoginHandler} colorScheme={"teal"} >Login</Button>
            </FormControl>
        </div>
    )
}
