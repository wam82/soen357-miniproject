import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function ElectroCardiogram() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Electrocardiogram</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>A test that records the electrical activity of the heart to evaluate its function and detect any abnormalities in heart rhythm or conduction.</p>
        
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

export default ElectroCardiogram;
