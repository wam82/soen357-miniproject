import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function PrescriptionPage() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>C-Reactive Protein (CRP)</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>A test that measures levels of CRP, a marker of inflammation in the body, to assess the presence and severity of inflammation related to infections, autoimmune diseases, and other conditions.</p>
        
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

export default PrescriptionPage;
