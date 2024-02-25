import React from 'react';
import './Lab.css'
import RightPanel from '../Panels/RightPane';
import { Link } from 'react-router-dom';

function Lab() {
  return (
    <div className="core">
        
      <div className="main-panel">

        <h1>My Lab Tests</h1>

        
        <div className='right-panel'><RightPanel currentPage="lab" /></div>  
        
        {/* Active Prescriptions */}
        <h2 id="blood">My Blood Tests</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date Undergone</th>
              <th>Results</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td><Link to="/blood-work">Blood Work</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/cbc">CBC</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/bmp">BMP</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/coagulation-profile">Coagulation Profile</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/cholesterol">Cholesterol Check</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/glucose">Glucose Test</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/thyroid">Thyroid Panel</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/liver">Liver Function Test</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/crp">CRP</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="urine">My Urine Tests</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date Undergone</th>
              <th>Results</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td><Link to="/urine-analysis">Urine Analysis</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/urine-culture">Urine Culture</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/urine-drug">Urine Drug Screening</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/urine-pregnancy">Urine Pregnancy Test</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="other">My Other Tests</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date Undergone</th>
              <th>Results</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td><Link to="/biopsy">Biopsy</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/genetic">Genetic Testing</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/endoscopy">Endoscopy</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/electrocardiogram">ECG</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
            </tr>
            <tr>
              <td><Link to="/electrocardiogram">EKG</Link></td>
              <td>YYYY-MM-DD</td>
              <td>Result</td>
              <td><Link to="/lab1">View Details</Link></td>
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

export default Lab;
