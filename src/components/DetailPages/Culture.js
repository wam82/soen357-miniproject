import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Culture() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Urine Culture</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>This test is used to detect and identify any bacteria or other microorganisms present in the urine, which can help diagnose urinary tract infections (UTIs).</p>
        
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

export default Culture;
