import React from 'react';
import axios from 'axios';

import '../styles/RidePopUp.css';

const RidePopUp = (props) => {
  console.log(props.ride);

  const handleConfirm = async () => {
    const captainId = localStorage.getItem('captainId');
    try{
      const res = await axios.post("http://localhost:4000/api/rides/confirm",{
        rideId: props.ride._id,
        captainId
      });
      if(res.data.success){
        props.setRidePopupPanel(false);
        props.setConfirmRidePopupPanel(true);
      }
    }catch(error){
      console.error("Error ",error);

    }
  }
  return (
    <div className="ride-popup-container">
      <h5
        className="close-button"
        onClick={() => props.setRidePopupPanel(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="ride-header">New Ride Available!</h3>

      <div className="ride-card">
        <div className="user-info">
          <img
            className="user-avatar"
            src="https://imgs.search.brave.com/bWNFz9pFC1Ul5pZ7ql6Z9qc1cTlkBrZbXMdCTkoMqeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bl8yNjg4MzQtNTM4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
            alt=""
          />
          <h2 className="user-name">
            {props.ride?.user?.name}
          </h2>
        </div>
        <h5 className="distance">2.2 KM</h5>
      </div>

      <div className="ride-details">
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
            <h3 className="ride-label">Fare</h3>
            <p className="ride-value">₹{props.ride?.fare}</p>
          </div>
        </div>
      </div>

      <div className="ride-actions">
        <button
          className="accept-btn"
          onClick={() => {
            handleConfirm();
          }}
        >
          Accept
        </button>
        <button
          className="ignore-btn"
          onClick={() => props.setRidePopupPanel(false)}
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
