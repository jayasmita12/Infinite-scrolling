import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import "../style/navbar.css"

export const Navbar = () => {
    const [token,setToken] = useContext(AuthContext)
    console.log(token)
    if(token){
        setToken(true)
    }
    return (
        <div className='navbar'>
            <div>
                <Heading className='navbar-header'>Scrolling App</Heading>
            </div>
            <div>
            <Link to="/home"><button className="navbar-login-btn">{token ? "Log In" :"Log Out"}</button></Link>
            </div>
        </div>
    )
}
