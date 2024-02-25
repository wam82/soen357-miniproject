import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Biopsy() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Biopsy</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>A procedure in which a small sample of tissue is removed from the body for examination under a microscope to diagnose or determine the nature of a disease or condition.</p>
        
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

export default Biopsy;
