import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Thyroid() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Joint MRI</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Used to assess the joints, such as the knee, shoulder, and hip, for conditions like torn ligaments, cartilage injuries, and arthritis.</p>
        
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
