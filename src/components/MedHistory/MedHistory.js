import React from 'react';
import './MedHistory.css'
import RightPanel from '../Panels/RightPane';
import { Link } from 'react-router-dom';

function MedHistory() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>My Medical History</h1>

        
        <div className='right-panel'><RightPanel currentPage="medical-history" /></div>  

        {/* Active Prescriptions */}
        <h2 id="timeline">Timeline</h2>
        <table>
          <thead>
            <tr>
              <th>Medical Event</th>
              <th>Date</th>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Event 1</td>
              <td>YYYY-MM-DD</td>
              <td>Surgery</td>
              <td><Link to="/event1">View Details</Link></td>
            </tr>
            <tr>
              <td>Event 2</td>
              <td>YYYY-MM-DD</td>
              <td>Scan</td>
              <td><Link to="/event1">View Details</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="conditions">My Conditions</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date diagnosed</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Condition 1</td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/event1">View Details</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="family">My Family's Medical History</h2>
        <table>
          <thead>
            <tr>
              <th>Medical Event</th>
              <th>Date</th>
              <th>Type</th>
              <th>Relative</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Event 1</td>
              <td>YYYY-MM-DD</td>
              <td>Surgery</td>
              <td>John Doe</td>
              <td><Link to="/event1">View Details</Link></td>
            </tr>
            <tr>
              <td>Event 2</td>
              <td>YYYY-MM-DD</td>
              <td>Scan</td>
              <td>Jane Doe</td>
              <td><Link to="/event1">View Details</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        {/* To Renew Prescriptions */}
        <h2 id="allergies">Allergies</h2>
        <table>
          <thead>
            <tr>
              <th>Allergy</th>
              <th>Date diagnosed</th>
              <th>Requires Epipen?</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for prescriptions to renew */}
            <tr>
              <td>Allergy 1</td>
              <td>YYYY-MM-DD</td>
              <td>Yes</td>
            </tr>

            <tr>
              <td>Allergy 2</td>
              <td>YYYY-MM-DD</td>
              <td>No</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="providers">Healthcare Providers</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Latest Consultation Date</th>
              <th>First Consultation Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for prescriptions to renew */}
            <tr>
              <td>Family Doctor</td>
              <td>Jane Doe</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
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

export default MedHistory;
