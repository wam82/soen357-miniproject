import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Thyroid() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Abdominal Ultrasound</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Used to visualize the organs in the abdomen, such as the liver, kidneys, gallbladder, and pancreas, to diagnose conditions like gallstones, kidney stones, and abdominal tumors.</p>
        
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
