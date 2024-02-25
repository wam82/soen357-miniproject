import React from 'react';
import './Vaccines.css'
import RightPanel from '../Panels/RightPane';

function VaccinesPage() {
  return (
    <div className="core">
        
      <div className="main-panel">

        <h1>My Vaccines</h1>

        
        <div className='right-panel'><RightPanel currentPage="vaccines" /></div>  
        
        {/* Active Prescriptions */}
        <h2 id="record">Vaccine Record</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date Administered</th>
              <th>Dosage</th>
              <th>Booster Needed?</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Vaccine 1</td>
              <td>YYYY-MM-DD</td>
              <td>Dosage</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Vaccine 2</td>
              <td>YYYY-MM-DD</td>
              <td>Dosage</td>
              <td>No</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="recommended">Recommended Vaccines</h2>
        <table>
          <thead>
            <tr>
                <th>Type</th>
                <th>Date Administered</th>
                <th>Dosage</th>
                <th>Recommended because?</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Vaccine 1</td>
              <td>YYYY-MM-DD</td>
              <td>Dosage</td>
              <td>Age</td>
            </tr>
            <tr>
              <td>Vaccine 2</td>
              <td>YYYY-MM-DD</td>
              <td>Dosage</td>
              <td>Travel</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

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

export default VaccinesPage;
