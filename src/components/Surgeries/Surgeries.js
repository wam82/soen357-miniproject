import React from 'react';
import './Surgeries.css'
import RightPanel from '../Panels/RightPane';
import { Link } from 'react-router-dom';

function SurgeriesPage() {
  return (
    <div className="core">
        
      <div className="main-panel">

        <h1>My Surgeries and Hospitalizations</h1>

        
        <div className='right-panel'><RightPanel currentPage="surgeries-and-hospitalizations" /></div>  
        
        {/* Active Prescriptions */}
        <h2 id="surgeries">My Surgical Procedures</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Affected Area</th>
              <th>Date Undergone</th>
              <th>Anesthesia Type</th>
              <th>Performed By</th>
              <th>Postoperative Care</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Surgery 1</td>
              <td>Knee</td>
              <td>YYYY-MM-DD</td>
              <td>Local</td>
              <td>Dr. Doe</td>
              <td><Link to="/surgery1">View Details</Link></td>
            </tr>
            <tr>
              <td>Surgery 2</td>
              <td>Wrist</td>
              <td>YYYY-MM-DD</td>
              <td>N/A</td>
              <td>Dr. Doe</td>
              <td>N/A</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="recommended">My Hospitalizations</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Admission Reason</th>
              <th>Admission Date</th>
              <th>Discharge Date</th>
              <th>Location</th>
              <th>Doctor In Charge</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Hospitalization 1</td>
              <td>Cough, Sore Throat</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
              <td>Hospital X</td>
              <td>Dr. Doe</td>
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

export default SurgeriesPage;
