import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import axios from 'axios';
import io from 'socket.io-client';

import '../styles/CaptainHome.css';

const SOCKET_URL = 'http://localhost:4000';

const CaptainHome = () => {
  const navigate = useNavigate();
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const [ride, setRide] = useState(null);
  const [captainLocation, setCaptainLocation] = useState();

  useEffect(() => {
    const socket = io(SOCKET_URL);
    const captainId = localStorage.getItem('captainId');
    if (captainId) {
      socket.emit('joinRoom', captainId);
    }
    socket.on('newRide', (newRide) => {
      setRide(newRide);
      setRidePopupPanel(true);
    });
    socket.on('rideStarted', (ride) => {
       console.log('rideStarted event received', ride); // Add this line
      navigate('/captainRiding', { state: { ride } });
    });
    return () => {
      socket.off('newRide');
      socket.off('rideStarted');

    }
  }, []);

  const handleAcceptRide = async () => {
    try {
      const captainId = localStorage.getItem('captainId');
      const res = await axios.put(`http://localhost:4000/api/rides/${ride._id}`, {
        status: 'accepted',
        captain: captainId,
      });
      if (res.data.success) {
        setConfirmRidePopupPanel(true);
        setRidePopupPanel(false);
        setRide(res.data.ride);
      }
    } catch (error) {
      console.error('Error accepting ride:', error);
    }
  };

  return (
    <div className="captain-home-wrapper">
      <div className="captain-home-container">
        <div className="captain-flex">
          <div className="captain-hero">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="Captain Driving"
            />
          </div>

          <div className="captain-details-panel">
            <CaptainDetails />
          </div>
        </div>

        {/* Ride Popup */}
        {ridePopupPanel && (
          <div className="popup-overlay">
            <div className="popup-panel">
              <RidePopUp
                ride={ride}
                setRidePopupPanel={setRidePopupPanel}
                setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                onAcceptRide={handleAcceptRide}
              />
            </div>
          </div>
        )}

        {/* Confirm Ride Popup */}
        {confirmRidePopupPanel && (
          <div className="popup-overlay">
            <div className="popup-panel">
              <ConfirmRidePopUp
                ride={ride}
                setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                setRidePopupPanel={setRidePopupPanel}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaptainHome;
