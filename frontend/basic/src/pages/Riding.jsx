import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Riding.css';
import { FiCheck } from 'react-icons/fi'; // ✅ Import tick icon

const Riding = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [paymentDone, setPaymentDone] = useState(false); // ✅ Track payment

  const { ride } = location.state || {};

  if (!ride) {
    return (
      <div className="riding-wrapper">
        <div className="riding-container">
          <h2>No ride data available.</h2>
          <button onClick={() => navigate('/home')}>Go Home</button>
        </div>
      </div>
    );
  }

  const captain = ride.captain || {};
  const vehicleDetails = captain.vehicleDetails || {};
  const captainName = (captain.firstName && captain.lastName)
    ? `${captain.firstName} ${captain.lastName}`
    : (captain.name || "Captain");
  const vehicleNumber = vehicleDetails.vehiclePlate || "N/A";
  const vehicleModel = vehicleDetails.vehicleType || "N/A";
  const dropAddress = ride.destination || "Unknown";
  const fare = ride.fare || "200";

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

              {/* Payment Buttons */}
              <button 
              onClick={() => setPaymentDone(true)} className="payment-button">Pay</button>

              {paymentDone && (
                <div className="ride-complete-tick">
                  <div className="tick-circle">
                    <FiCheck className="tick-icon" />
                  </div>
                  <p className="tick-text">Payment Completed</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Riding;
