import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Thyroid() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Pelvic CT Scan</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Used to examine the pelvic organs, including the reproductive organs, bladder, and rectum, to diagnose conditions like ovarian cysts, uterine fibroids, and bladder tumors.</p>
        
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

export default Thyroid;
