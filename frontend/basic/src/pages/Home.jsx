// import React, { use, useEffect, useState } from 'react';
// import 'remixicon/fonts/remixicon.css';
// import '../styles/Home.css';
// import LocationSearchPanel from '../components/LocationSearchPanel';
// import VehiclePanel from '../components/VehiclePanel';
// import WaitingForDriver from '../components/WaitingForDriver';
// import ConfirmRide from '../components/ConfirmRide';
// import LookingForDriver from '../components/LookingForDriver';

// const Home = () => {
//   const [pickup, setPickup] = useState('');
//   const [destination, setDestination] = useState('');
//   const [panelOpen, setPanelOpen] = useState(false);
//   const [vehiclePanel, setVehiclePanel] = useState(false);
//   const [confirmRidePanel, setConfirmRidePanel] = useState(false);
//   const [vehicleFound, setVehicleFound] = useState(false);
//   const [waitingForDriver, setWaitingForDriver] = useState(false);
//   const [pickupSuggestions, setPickupSuggestions] = useState([]);
//   const [destinationSuggestions, setDestinationSuggestions] = useState([]);
//   const [activeField, setActiveField] = useState(null);
//   const [ride, setRide] = useState(null);

//   function findTrip() {
//     setVehiclePanel(true)
//     setPanelOpen(false)
//   }
//   // useEffect(() => {
//   //   setConfirmRidePanel(true)

//   // },[])

//   return (
//     <div className="home-container">
//       {/* <div className="live-tracking-wrapper">
//         <LiveTracking />
//       </div> */}

//       <div className="bottom-panel">
//         <div className="search-box">
//           <button className="close-btn" onClick={() => setPanelOpen(false)}><i className="ri-arrow-down-wide-line"></i></button>
//           <h4 className="title">Find a trip</h4>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <input
//               onClick={() => { setPanelOpen(true); setActiveField('pickup'); }}
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               className="input-box"
//               type="text"
//               placeholder="Add a pick-up location"
//             />
//             <input
//               onClick={() => { setPanelOpen(true); setActiveField('destination'); }}
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="input-box"
//               type="text"
//               placeholder="Enter your destination"
//             />
//           </form>
//           <button onClick={findTrip} className="find-trip-btn">Find Trip</button>
//         </div>

//         {panelOpen && (
//           <div className="suggestions-panel">
//             <LocationSearchPanel
//               suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
//               setPanelOpen={setPanelOpen}
//               setVehiclePanel={setVehiclePanel}
//               setPickup={setPickup}
//               setDestination={setDestination}
//               activeField={activeField}
//             />
//           </div>
//         )}

//         {vehiclePanel && (
//           <VehiclePanel
//             setConfirmRidePanel={setConfirmRidePanel}
//             setVehiclePanel={setVehiclePanel}
//           />
//         )}

//         {confirmRidePanel && (
//           <ConfirmRide
//             pickup={pickup}
//             destination={destination}
//             setConfirmRidePanel={setConfirmRidePanel}
//             setVehicleFound={setVehicleFound}
//           />
//         )}

//         {vehicleFound && (
//           <LookingForDriver
//             pickup={pickup}
//             destination={destination}
//             setVehicleFound={setVehicleFound}
//           />
//         )}

//         {waitingForDriver && (
//           <WaitingForDriver
//             ride={ride}
//             setVehicleFound={setVehicleFound}
//             setWaitingForDriver={setWaitingForDriver}
//             waitingForDriver={waitingForDriver}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import '../styles/Home.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import WaitingForDriver from '../components/WaitingForDriver';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [ride, setRide] = useState(null);

  const findTrip = () => {
    setVehiclePanel(true);
    setPanelOpen(false);
  };

  return (
    <div className="home-container">
      <div className="home-flex-layout">
        {/* LEFT: Search Panel */}
        <div className="left-panel">
          <div className="form-section">
            <button className="close-btn" onClick={() => setPanelOpen(false)}>
              <i className="ri-arrow-down-wide-line"></i>
            </button>
            <h4 className="title">Find a Trip</h4>
            <form className="search-box" onSubmit={(e) => e.preventDefault()}>
              <input
                onClick={() => {
                  setPanelOpen(true);
                  setActiveField('pickup');
                }}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="input-box"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => {
                  setPanelOpen(true);
                  setActiveField('destination');
                }}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="input-box"
                type="text"
                placeholder="Enter your destination"
              />
              <button onClick={findTrip} className="find-trip-btn">
                Find Trip
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Dynamic Panels */}
        <div className="right-panel">
          {panelOpen && (
            <div className="suggestions-panel">
              <LocationSearchPanel
                suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                setPanelOpen={setPanelOpen}
                setVehiclePanel={setVehiclePanel}
                setPickup={setPickup}
                setDestination={setDestination}
                activeField={activeField}
              />
            </div>
          )}

          {vehiclePanel && (
            <VehiclePanel
              setConfirmRidePanel={setConfirmRidePanel}
              setVehiclePanel={setVehiclePanel}
            />
          )}

          {confirmRidePanel && (
            <ConfirmRide
              pickup={pickup}
              destination={destination}
              setConfirmRidePanel={setConfirmRidePanel}
              setVehicleFound={setVehicleFound}
            />
          )}

          {vehicleFound && (
            <LookingForDriver
              pickup={pickup}
              destination={destination}
              setVehicleFound={setVehicleFound}
            />
          )}

          {waitingForDriver && (
            <WaitingForDriver
              ride={ride}
              setVehicleFound={setVehicleFound}
              setWaitingForDriver={setWaitingForDriver}
              waitingForDriver={waitingForDriver}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
