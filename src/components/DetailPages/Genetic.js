import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function Genetic() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Genetic Testing</h1>

        
        <div className='right-panel'><RightPanel currentPage="" /></div>  

        <p className='content'>Tests that analyze an individual's DNA to identify genetic variations associated with inherited diseases, predispositions to certain conditions, or other genetic factors.</p>
        
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

export default Genetic;
