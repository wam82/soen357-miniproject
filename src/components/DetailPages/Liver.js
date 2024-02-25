import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Liver() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Liver Function Test</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Tests that assess liver health by measuring levels of enzymes, proteins, and other substances in the blood that indicate liver function and potential liver damage.</p>
        
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

export default Liver;
