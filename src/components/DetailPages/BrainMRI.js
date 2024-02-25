import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Thyroid() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Brain MRI</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Used to visualize the brain and surrounding structures in detail to diagnose conditions such as brain tumors, multiple sclerosis, and strokes.</p>
        
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
