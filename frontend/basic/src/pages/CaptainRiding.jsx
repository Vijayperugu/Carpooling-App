import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import '../styles/CaptainRiding.css';
import { FiCheck } from 'react-icons/fi';

const CaptainRiding = () => {
  const [rideCompleted, setRideCompleted] = useState(false);
  // const location = useLocation();
  // const rideData = location.state?.ride;
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/captainHome');
  }

  return (
    <div className="captain-riding-wrapper">
      <div className="captainriding-home-container">
        <div className="captainriding-flex">

          <div className="captainriding-hero">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="Captain Driving"
            />
          </div>

          <div className="captainriding-details-panel">
            <div className="ride-action-bar" onClick={() => setRideCompleted(true)}>
              <h4 className="distance-info">Ride OnGoing</h4>
              <button className="complete-btn">Complete Ride</button>
            </div>

            {/* ✅ Show tick icon after completion */}
            {rideCompleted && (
              <div className="ride-complete-tick">
                <div className="tick-circle">
                  <FiCheck className="tick-icon" />
                </div>
                <p className="tick-text">Ride Completed</p>
                <button 
                onClick={handleClick}
                className='back-home'>Home</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
