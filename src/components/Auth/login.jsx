import React, { useContext, useState } from 'react'
import {AuthContext} from '../../context/AuthProvider'
import Heading from '../others/heading';

const Login = (props) => {
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    const userData = useContext(AuthContext)
    
    function submitHandler(e){
        e.preventDefault();
        props.handleLogin(email,password);
        setEmail("")
        setPassword("")
        console.log("from auth: ",userData)
    }
    return (
    <div>
        <Heading />
        <div className='login'>
            <form className='login-form' onSubmit={submitHandler}>
                <input value={email} required type='email' placeholder='Enter email' className='login-details login-details2'
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                />
                <input value={password} required type='password' placeholder='Enter password' className='login-details login-details2'
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                />
                <button type='submit' className='login-details login-button'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login