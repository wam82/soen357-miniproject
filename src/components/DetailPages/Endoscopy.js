import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Endoscopy() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Endoscopy</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>A procedure that involves inserting a flexible tube with a camera and light source into the body to visualize internal organs or structures, commonly used for examining the gastrointestinal tract, respiratory system, or other areas.</p>
        
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <button className="dropbtn">Languages</button>
          <div className="dropdown-content">
            <button>English</button>
            <button>Spanish</button>
            <button>French</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Endoscopy;
