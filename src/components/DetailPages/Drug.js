import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Drug() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Uring Drug Screening</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>This test is used to detect the presence of drugs or their metabolites in the urine, commonly used in workplace or legal settings to screen for drug use.</p>
        
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

export default Drug;
