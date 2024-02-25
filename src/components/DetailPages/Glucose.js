import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Glucose() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Glucose Test</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Tests that measure blood sugar levels to diagnose diabetes, monitor glucose control in diabetic patients, and assess risk of hypoglycemia or hyperglycemia.</p>
        
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

export default Glucose;
