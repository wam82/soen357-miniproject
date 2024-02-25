import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Coagulation() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Coagulation Profile</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Tests that evaluate the blood's ability to clot properly by measuring factors involved in the coagulation process, helping diagnose bleeding disorders and monitor anticoagulant therapy.</p>
        
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

export default Coagulation;
