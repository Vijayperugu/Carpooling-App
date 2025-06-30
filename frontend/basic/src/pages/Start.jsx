import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Start.css'
const Start = () => {
  const userId = localStorage.getItem("userId" || "") ;
  const captainId = localStorage.getItem("captainId" || "");
  return (
    <div>
     <div className="start-hero">
       <div className='start-hero1'>
        <div className='start-hero2'>
        <div className='start-bottom-box'>
          <h2 className='start-heading'>Get Start as Driver</h2>
          <Link to={captainId?"/captainHome":"/captainLogin"} className='start-button'>Continue</Link>
        
        </div>
        
      </div>
      <div className='start-hero2'>
        <div className='start-bottom-box'>
          <h2 className='start-heading'>Get Start as Passenger</h2>
          <Link to={userId?"/Home":"/login"}className='start-button'>Continue</Link>
        </div>
       </div>
        
      </div>
     </div>
    </div>
  )
}

export default Start
