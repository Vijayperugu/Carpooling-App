import React from 'react';
import axios from 'axios';
import '../styles/ConfirmRide.css';

const ConfirmRide = (props) => {
  const handleConfirmRide = async() =>{
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in");
        return;
      }
      const rideData = {
        user: userId, // Replace with actual user ID
        pickup: props.pickup,
        destination: props.destination,
        fare:200,
        otp: Math.floor(1000 + Math.random() * 9000).toString()
      };
      console.log("Ride Data:", rideData);
      
      const response = await axios.post('http://localhost:4000/api/rides',rideData);
      if(response.data.success){
        props.setVehicleFound(true);
        props.setConfirmRidePanel(false);
      }else{
        alert("Failed to create ride");

      }
    }catch(error){
      console.error(error);
    }
  };
  return (
    <div className="confirm-ride-container">
      <h5 className="close-btn" onClick={() => props.setConfirmRidePanel(false)}>
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="title">Confirm your Ride</h3>

      <div className="confirm-ride-content">
        <img
          className="vehicle-img"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="vehicle"
        />
        <div className="details-container">
          <div className="detail-item">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="label">Pickup Point</h3>
              <p className="value">{props.pickup}</p>
            </div>
          </div>
          <div className="detail-item">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="label">Destination</h3>
              <p className="value">{props.destination}</p>
            </div>
          </div>
          <div className="detail-item">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="label">₹200</h3>
              <p className="value">Cash</p>
            </div>
          </div>
        </div>
        <button
          className="confirm-btn"
          onClick={handleConfirmRide
          }
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
