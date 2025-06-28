import React from 'react'
import '../styles/VehiclePanel.css'

const VehiclePanel = (props) => {
    return (
        <div className="vehicle-panel">
            <h5
                className="back-button"
                onClick={() => props.setVehiclePanel(false)}
            >
                <i className="ri-arrow-down-wide-line icon"></i>
            </h5>

            <h3 className="title">Choose Seating Share</h3>

            <div
                onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.setVehiclePanel(false)
                }}
                className="vehicle-option"
            >
                <img
                    className="vehicle-img"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt=""
                />
                <div className="vehicle-info">
                    <h4 className="vehicle-name">BMW <span><i className="ri-user-3-fill"></i>2</span></h4>
                    <h5 className="vehicle-time">2 mins away</h5>
                    <p className="vehicle-desc">Affordable, compact rides</p>
                </div>
                <h2 className="vehicle-price">₹200</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.setVehiclePanel(false)
                }}
                className="vehicle-option"
            >
                <img
                    className="vehicle-img"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt=""
                />
                <div className="vehicle-info">
                    <h4 className="vehicle-name">Suzuki <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className="vehicle-time">2 mins away</h5>
                    <p className="vehicle-desc">Affordable, compact rides</p>
                </div>
                <h2 className="vehicle-price">₹200</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.setVehiclePanel(false)
                }}
                className="vehicle-option"
            >
                <img
                    className="vehicle-img"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt=""
                />
                <div className="vehicle-info">
                    <h4 className="vehicle-name">Indigo <span><i className="ri-user-3-fill"></i>2</span></h4>
                    <h5 className="vehicle-time">2 mins away</h5>
                    <p className="vehicle-desc">Affordable, compact rides</p>
                </div>
                <h2 className="vehicle-price">₹200</h2>
            </div>

            
        </div>
    )
}

export default VehiclePanel
