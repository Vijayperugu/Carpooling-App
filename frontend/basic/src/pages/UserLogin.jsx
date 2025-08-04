import React,{useState,} from 'react'
import { Link } from 'react-router-dom'
import "../styles/Userlogin.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const navigate = useNavigate()



    const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post("https://carpooling-app-vh4t.onrender.com/api/user/login", {email,password});
      if(response.data.success){
        localStorage.setItem("userId", response.data.userId);
        // setToken(response.data.token);
        navigate('/Home')
      }else{
        alert("Login failed, please try again");
      }
      
    } catch (error) {
      console.log(error)
      
    }
    }
  return (
    <div className='userlogin-container'>
        <div className='container2'>
          <h2>Car Pool</h2>
            <form onSubmit={handleSubmit}className='login-form'>
            <h3 className='label'> what's your email</h3>
            <input type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            placeholder='email@example.com'
             />
             <h3 className='label'> Enter password</h3>
             <input type="password"
             required
             value={password }
             onChange={(e) => setPassWord(e.target.value) }
             className='input'
             placeholder='password' />
             <button type="submit" className='login-button'>Login</button>
        </form>
        <p className='signup-link'>
            New here? <Link to='/signup' className='highlight'> create new Account</Link>
        </p>
        </div>
    </div>
  )
}

export default UserLogin