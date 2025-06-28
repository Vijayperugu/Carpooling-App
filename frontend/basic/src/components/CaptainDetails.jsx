import React from 'react';
import '../styles/CaptainDetails.css';

const CaptainDetails = () => {

  return (
    <div className="captain-details-container">
      <div className="captain-header">
        <div className="captain-info">
          <img
            className="captain-avatar"
            src="https://imgs.search.brave.com/bWNFz9pFC1Ul5pZ7ql6Z9qc1cTlkBrZbXMdCTkoMqeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bl8yNjg4MzQtNTM4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
            alt="Captain"
          />
          <h4 className="captain-name">
            Vijay Perugu
          </h4>
        </div>
        <div className="captain-earnings">
          <h4>₹295.20</h4>
          <p>Earned</p>
        </div>
      </div>

      <div className="stats-panel">
        <div className="stat-box">
          <i className="ri-timer-2-line"></i>
          <h5>10.2</h5>
          <p>Hours Online</p>
        </div>
        <div className="stat-box">
          <i className="ri-speed-up-line"></i>
          <h5>10.2</h5>
          <p>Trips Completed</p>
        </div>
        <div className="stat-box">
          <i className="ri-booklet-line"></i>
          <h5>10.2</h5>
          <p>Rides Accepted</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
