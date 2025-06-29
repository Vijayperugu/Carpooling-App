import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import '../styles/CaptainRiding.css'

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const location = useLocation()
  const rideData = location.state?.ride

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
            <div
              className="ride-action-bar"
              onClick={() => setFinishRidePanel(true)}
            >
              <h5 className="swipe-up">
                <i className="ri-arrow-up-wide-line"></i>
              </h5>
              <h4 className="distance-info">4 KM away</h4>
              <button className="complete-btn">Complete Ride</button>
            </div>

            {/* Finish Ride Panel Slide Up */}
            <div className={`finish-ride-panel ${finishRidePanel ? 'show' : 'hide'}`}>
              <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CaptainRiding
