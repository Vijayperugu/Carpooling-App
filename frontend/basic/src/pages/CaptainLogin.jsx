import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

import '../styles/CaptainLogin.css'


const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://carpooling-app-vh4t.onrender.com/api/captain/login',{
            email,
            password
        })
        if(response.data.sucess){
            localStorage.setItem("captainId", response.data.captainId)
            navigate('/captainHome');
        }else{
            alert("login failed,try again")
        }    
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");   
        }

    }
    return (
        <div className='captain-container'>
            <div className='captain-container1'>
                <div className='login-container'>
                <form onSubmit={submitHandler}>
                    <h3 className='form-title'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input-box'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='form-title'>Enter Password</h3>
                    <input
                        className='input-box'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder='password'
                    />

                    <button className='login-btn'>Login</button>
                </form>

                <p className='register-text'>
                    Join a fleet? <Link to='/captainSignup'>Register as a Captain</Link>
                </p>
            </div>

            <div>
                <Link to='/login' className='switch-user-btn'>
                    Sign in as User
                </Link>
            </div>
            </div>
        </div>

    )
}

export default CaptainLogin