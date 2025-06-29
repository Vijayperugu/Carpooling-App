import React from 'react';
import '../styles/WaitingForDriver.css';

const WaitingForDriver = ({ ride, waitingForDriver }) => {
  console.log(ride);
  return (
    <div className="waiting-driver-container">
      <h5 className="close-button" onClick={() => waitingForDriver(false)}>
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <div className="driver-info">
        <img
          className="vehicle-image"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="vehicle"
        />
        <h2 className="driver-name">
          {ride?.captain
            ? `${ride.captain.firstName || ""} ${ride.captain.lastName || ""}`.trim()
            : "Captain"}
        </h2>
        <h4 className="vehicle-plate">
          {ride?.captain?.vehicleDetails?.vehiclePlate || "Plate N/A"}
        </h4>
        {/* <p className="vehicle-model">
          {ride?.captain?.vehicleDetails?.vehicleType || "Model N/A"}
        </p> */}
        <h1> {ride?.otp}</h1>
      </div>

      <div className="ride-summary">
        <div className="ride-detail">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="label">Pickup</h3>
            <p className="value">{ride?.pickup}</p>
          </div>
        </div>
        <div className="ride-detail">
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className="label">Destination</h3>
            <p className="value">{ride?.destination}</p>
          </div>
        </div>
        <div className="ride-detail">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="label">₹{ride?.fare}</h3>
            <p className="value">Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
