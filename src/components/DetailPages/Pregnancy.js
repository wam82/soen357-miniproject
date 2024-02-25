import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Pregnancy() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Urine Pregnancy Test</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>This test detects the presence of human chorionic gonadotropin (hCG), a hormone produced during pregnancy, in the urine to determine pregnancy status.</p>
        
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

export default Pregnancy;
