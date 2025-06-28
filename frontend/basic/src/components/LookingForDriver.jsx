import React from 'react';
import '../styles/LookingForDriver.css';

const LookingForDriver = ({ pickup, destination, setVehicleFound }) => {
  return (
    <div className="looking-driver-container">
      <h5 className="close-button" onClick={() => setVehicleFound(false)}>
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="header">Looking for Driver...</h3>

      <div className="driver-search-panel">
        <img
          className="vehicle-image"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="vehicle"
        />
        <div className="ride-details">
          <div className="ride-detail">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="label">Pickup</h3>
              <p className="value">{pickup}</p>
            </div>
          </div>
          <div className="ride-detail">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="label">Destination</h3>
              <p className="value">{destination}</p>
            </div>
          </div>
          <div className="ride-detail">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="label">₹200</h3>
              <p className="value">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
