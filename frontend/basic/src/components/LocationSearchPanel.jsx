import React from 'react'
import '../styles/LocationSearchPanel.css'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField,setImage }) => {
    const Location =[
        '254 VVIT University ,Nambure ,Gunture',
        '100 Kasu Mall ,Arandalpet ,Gunture',
        '343 Phinox Mall , Nazar Center ,Gunture',
    ]

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        setPanelOpen(false)
        setImage(false)
        setImage(true)

    }

    return (
        <div>
            {suggestions && suggestions.length > 0 ?(
                suggestions.map((elem, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSuggestionClick(elem)}
                        className='suggestion-item'
                    >
                        <h2 className='icon-circle'><i className="ri-map-pin-fill"></i></h2>
                        <h4  onClick={()=> setVehiclePanel(true)}className='suggestion-text'>{elem}</h4>
                    </div>
                ))
            ):Location.map((elem, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSuggestionClick(elem)}
                        className='suggestion-item'
                    >
                        <h2 className='icon-circle'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='suggestion-text'>{elem}</h4>
                    </div>
                ))}
        </div>
    )
}

export default LocationSearchPanel
