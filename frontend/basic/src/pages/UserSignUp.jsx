import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../styles/UserSignUp.css"

const UserSignUp = ({ setToken }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
   const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://carpooling-app-vh4t.onrender.com/api/user/register", {
        name,
        email,
        password
      });

      if (response.data.success) {
        // setToken(response.data.token);
        localStorage.setItem("userId", response.data.user._d);
        navigate('/Home')
      } else {
        alert("Signup failed, please try again");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-inner'>
        <h2>Car Pool</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
          <h3 className='label'>What's your name</h3>
          <input
            type="text"
            placeholder='Enter Name'
            className='input full-width'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h3 className='label'>What's your email</h3>
          <input
            type="email"
            placeholder='email@example.com'
            className='input full-width'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className='label'>Enter Password</h3>
          <input
            type="password"
            placeholder='password'
            className='input full-width'
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            required
          />
          <button type='submit' className='submit-button'>Create account</button>
        </form>
        <p className='login-link'>
          Already have an account? <Link to='/login' className='highlight'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
