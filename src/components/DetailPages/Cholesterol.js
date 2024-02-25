import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Cholesterol() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Cholesterol Check</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Tests that measure levels of cholesterol and triglycerides in the blood to assess heart health and risk of cardiovascular disease.</p>
        
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

export default Cholesterol;
