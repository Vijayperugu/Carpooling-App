import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/Riding.css'

const Riding = () => {
  const location = useLocation()
  const { ride } = location.state || {}
  const navigate = useNavigate()

  // Extract captain and vehicle info safely
  const captain = ride.captain || {};
  const captainName = (captain.firstName && captain.lastName)
    ? `${captain.firstName} ${captain.lastName}`
    : (captain.name || "Captain");
  const vehicleNumber = captain.vehicleDetails?.plate || captain.vehicleNumber || "N/A";
  const vehicleModel = captain.vehicleDetails?.model || "Maruti Suzuki Alto";
  const dropAddress = ride.destination || "Unknown";
  const fare = ride.fare || "0.00";

  return (
    <div className="riding-wrapper">
      <div className="riding-container">
        <div className="riding-flex">
          
          {/* Left Image Section */}
          <div className="riding-hero">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="Captain Driving"
            />
          </div>

          {/* Right Ride Details Section */}
          <div className="riding-details-panel">
            <Link to="/home" className="home-button">
              <i className="icon ri-home-5-line"></i>
            </Link>

            <div className="info-section">
              {/* Captain Info */}
              <div className="driver-info">
                <img
                  className="vehicle-image"
                  src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                  alt="Vehicle"
                />
                <div className="driver-text">
                  <h2 className="driver-name">{captainName}</h2>
                  <h4 className="vehicle-plate">{vehicleNumber}</h4>
                  <p className="vehicle-model">{vehicleModel}</p>
                </div>
              </div>

              {/* Ride Details */}
              <div className="ride-details">
                <div className="ride-detail-item">
                  <i className="icon ri-map-pin-2-fill"></i>
                  <div>
                    <h3 className="address-title">Drop Location</h3>
                    <p className="address-detail">{dropAddress}</p>
                  </div>
                </div>

                <div className="ride-detail-item">
                  <i className="icon ri-currency-line"></i>
                  <div>
                    <h3 className="fare-amount">₹{fare}</h3>
                    <p className="payment-mode">Cash Payment</p>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <button className="payment-button">Make a Payment</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Riding