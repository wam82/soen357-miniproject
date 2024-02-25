import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function BMP() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Basic Metabolic Panel (BMP)</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>A group of tests that measure different chemicals and electrolytes in the blood, such as sodium, potassium, calcium, and glucose, to assess kidney function, electrolyte balance, and acid-base balance.</p>
        
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

export default BMP;
