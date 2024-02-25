import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Analysis() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Urine Analysis</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Tests that examine the physical and chemical properties of urine to assess kidney function, detect infections, and identify other health conditions.</p>
        
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

export default Analysis;
