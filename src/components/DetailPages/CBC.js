import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function CBC() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Complete Blood Count (CBC)</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>A comprehensive blood test that provides information about various blood components, including red blood cells, white blood cells, and platelets, to screen for a wide range of conditions.</p>
        
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

export default CBC;
