import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Start.css'
const Start = () => {
  return (
    <div>
     <div className="start-hero">
       <div className='start-hero1'>
        <div className='start-hero2'>
        <div className='start-bottom-box'>
          <h2 className='start-heading'>Get Start as Driver</h2>
          <Link to='/captainlogin' className='start-button'>Continue</Link>
        </div>
        
      </div>
      <div className='start-hero2'>
        <div className='start-bottom-box'>
          <h2 className='start-heading'>Get Start as Passenger</h2>
          <Link to='/login' className='start-button'>Continue</Link>
        </div>
       </div>
        
      </div>
     </div>
    </div>
  )
}

export default Start
