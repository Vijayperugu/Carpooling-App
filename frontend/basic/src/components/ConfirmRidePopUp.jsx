import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ConfirmRidePopUp.css';

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your backend to verify OTP and start the ride
      const response = await axios.post(
        'https://carpooling-app-vh4t.onrender.com/api/rides/start-ride',
        {
          rideId: props.ride._id,
          otp: otp
        }
      );
      if (response.data.success) {
        // OTP verification successful, ride started
        props.setConfirmRidePopupPanel(false);
        navigate('/captainRiding')
      } else {
        console.error("OTP verification failed:", response.data.message);
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
    }
  };


  return (
    <div className="confirm-ride-popup">
      <h5 className="close-button" onClick={() => props.setConfirmRidePopupPanel(false)}>
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="popup-title">Confirm this ride to Start</h3>

      <div className="user-box">
        <div className="user-info">
          <img src="https://imgs.search.brave.com/bWNFz9pFC1Ul5pZ7ql6Z9qc1cTlkBrZbXMdCTkoMqeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bl8yNjg4MzQtNTM4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA" alt="User" />
          <h2 className="user-name">{props.ride?.user?.name}</h2>
        </div>
        <h5 className="distance">2.2 KM</h5>
      </div>

      <div className="w-full mt-5">
        <div className="ride-detail">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="ride-label">Pickup</h3>
            <p className="ride-value">{props.ride?.pickup}</p>
          </div>
        </div>
        <div className="ride-detail">
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className="ride-label">Destination</h3>
            <p className="ride-value">{props.ride?.destination}</p>
          </div>
        </div>
        <div className="ride-detail">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="ride-label">{props.ride?.fare}</h3>
            <p className="ride-value">Cash Cash</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleOtpSubmit}>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          className="otp-input"
          placeholder="Enter OTP"
        />

        <button className="confirm-btn" type="submit">Confirm</button>
        <button
          type="button"
          onClick={() => {
            props.setConfirmRidePopupPanel(false);
            props.setRidePopupPanel(false);
          }}
          className="cancel-btn"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ConfirmRidePopUp;
