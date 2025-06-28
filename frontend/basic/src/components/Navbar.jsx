import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
       <div className="nav">
         <div className="container">
           <div className="main-nav">
             <div className="logo">
               <h3>Car Polling</h3>
             </div>
             <div className="nav-menu">
               <ul>
                 <li>About us</li>
                 <li>Services</li>
                 <li>Contact us</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
    </nav>
    
    </>
  )
}

export default Navbar