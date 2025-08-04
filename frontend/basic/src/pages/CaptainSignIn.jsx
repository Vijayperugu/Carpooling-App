import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/CaptainSignup.css'
const CaptainSignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const navigate = useNavigate()




  const submitHandler = async (e) => {
    try {
      e.preventDefault()
    const response = await axios.post('https://carpooling-app-vh4t.onrender.com/api/captain/register', {
      firstName,
        lastName,
        email,
        password,
        vehicleDetails: {
          vehiclePlate,
          vehicleColor,
          vehicleCapacity: Number(vehicleCapacity),
          vehicleType,
        }

    })
    if(response.data.sucess){
      localStorage.setItem("captainId", response.data.captainId)
      navigate('/captainHome');
    }else{
      alert('Registration failed, please try again');
    }
      
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred at server');
      
    }
  }
  return (
    <div className='captain-signup-container'>
      <div className='signupp-container'>
        <form className='signup-form' onSubmit={submitHandler}>
          <h3 className='form-title'>What's our Captain's name</h3>
          <div className='input-row'>
            <input
              required
              className='input-box input-half'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className='input-box input-half'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className='form-title'>What's our Captain's email</h3>
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

          <h3 className='form-title'>Vehicle Information</h3>
          <div className='input-row'>
            <input
              required
              className='input-box input-half'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className='input-box input-half'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className='input-row'>
            <input
              required
              className='input-box input-half'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className='input-box input-half'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Car Company</option>
              <option value="Maruthi">Maruthi</option>
              <option value="Tata">Tata</option>
              <option value="Kia">Kia</option>
            </select>
          </div>

          <button className='signup-btn'>Create Captain Account</button>
          <p className='login-link'>
          Already have an account? <Link to='/captainLogin'>Login here</Link>
        </p>
        </form>
      </div>
    </div>

  )
}

export default CaptainSignIn