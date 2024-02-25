import React from 'react';
import './Scans.css'
import RightPanel from '../Panels/RightPane';
import { Link } from 'react-router-dom';

function Scan() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>My Scans</h1>

        
        <div className='right-panel'><RightPanel currentPage="scans" /></div>  

        {/* Active Prescriptions */}
        <h2 id="xray">My X-Ray Scans</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Scan Type</th>
              <th>Date</th>
              <th>Scan Results</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Scan 1</td>
              <td><Link to='/chest-xray'>Chest X-Ray</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 2</td>
              <td><Link to='/bone-xray'>Bone X-Ray</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 3</td>
              <td><Link to='/dental-xray'>Dental X-Ray</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="ct">My Computed Tomography (CT) Scans</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Scan Type</th>
              <th>Date</th>
              <th>Scan Results</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Scan 1</td>
              <td><Link to='/head-ct'>Head CT Scan</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 2</td>
              <td><Link to='/abdominal-ct'>Abdominal CT Scan</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 3</td>
              <td><Link to='/chest-ct'>Chest CT Scan</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 4</td>
              <td><Link to='/pelvic-ct'>Pelvic CT Scan</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        <h2 id="us">My Ultrasounds</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Scan Type</th>
              <th>Date</th>
              <th>Scan Results</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Scan 1</td>
              <td><Link to='/abdominal-us'>Abdominal Ultrasound</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 2</td>
              <td><Link to='/obstetric-us'>Obstetric Ultrasound</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
            </tr>
            <tr>
              <td>Scan 1</td>
              <td><Link to='/cardiac-us'>Cardiac Ultrasound</Link></td>
              <td>YYYY-MM-DD</td>
              <td><Link to="/scan1">View Results</Link></td>
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

export default Scan;
