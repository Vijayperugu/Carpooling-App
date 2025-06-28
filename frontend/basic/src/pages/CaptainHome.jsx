import React, { useState, useEffect, use } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import axios from 'axios';
import io from 'socket.io-client';

import '../styles/CaptainHome.css';


const SOCKET_URL = 'http://localhost:4000';



const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const [pendingRides, setPendingRides] = useState([]);
  const [ride, setRide] = useState(null);
  const [captainLocation,setCaptainLocation]=useState();


  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition((pos)=>{
  //     setCaptainLocation({
  //       lat: pos.coords.latitude,
  //       lng: pos.coords.langitude
  //     })
  //   },(err)=>{
  //     setCaptainLocation(null)
  //   })


  // },[]);

  useEffect(() => {
    // const fetchRides = async () =>{
    //   try {
    //     const response = await axios.get('http://localhost:4000/api/rides');
    //     if(response.data.success){
    //       setPendingRides(response.data.rides.filter(ride => ride.status === 'pending'));

    //     }
        
    //   } catch (error) {
    //     console.error('Error fetching rides:', error);

    //   }
    // }

    // fetchRides();

    const socket = io(SOCKET_URL);
    socket.on('newRide', (newRide) => {
      setRide(newRide);
      setRidePopupPanel(true);
    });
  },[])

  const handleAcceptRide = async ()=>{
    try {
      const captainId = localStorage.getItem('captainId');
      const res = await axios.put(`http://localhost:4000/api/rides/${ride._id}`,{
        status: 'accepted',
        captain:captainId
      });
      if(res.data.success){
        setConfirmRidePopupPanel(true);
        setRidePopupPanel(false);
        setRide(res.data.ride);
        console.log(res.data.ride);

      }
    } catch (error) {
      console.error('Error accepting ride:', error); 
    }
  }
  
  return (
    <div className='captain-home-wrapper'>
      <div className="captain-home-container">
        {/* <div className="captain-top-nav">
        <Link to="/captain-home" className="logout-icon-container">
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div> */}

        <div className="captain-hero">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="Captain Driving"
          />
        </div>

        <div className="captain-details-panel">
          <CaptainDetails />
        </div>

        {/* Ride Popup */}
        {ridePopupPanel && (
          <div className="popup-panel">
            <RidePopUp
              ride={ride}
              setRidePopupPanel={setRidePopupPanel}
              setConfirmRidePopupPanel={setConfirmRidePopupPanel}
              // confirmRide={confirmRide}
              onAcceptRide={handleAcceptRide}
            />
          </div>
        )}

        {/* Confirm Ride Popup */}
        {confirmRidePopupPanel && (
          <div className="popup-panel" style={{ height: '100vh' }}>
            <ConfirmRidePopUp
              ride={ride}
              setConfirmRidePopupPanel={setConfirmRidePopupPanel}
              setRidePopupPanel={setRidePopupPanel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaptainHome;
