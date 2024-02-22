import React from 'react';
import './MedHistory.css'
import RightPanel from '../Panels/RightPane';

function PrescriptionPage() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>My Prescriptions</h1>

        
        <div className='right-panel'><RightPanel currentPage="prescriptions" /></div>  

        {/* Active Prescriptions */}
        <h2 id="active">Medical History</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date prescribed</th>
              <th>Expiring Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for active prescriptions */}
            <tr>
              <td>Prescription 18</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        {/* To Renew Prescriptions */}
        <h2 id="to-renew">Allergies</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date prescribed</th>
              <th>Expiring Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for prescriptions to renew */}
            <tr>
              <td>Prescription 1</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>

            <tr>
              <td>Prescription 3</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 4</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 5</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 6</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 7</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 8</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 9</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 10</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 11</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 12</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 13</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 14</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 15</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 16</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 17</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>

        {/* Expired Prescriptions */}
        <h2 id="expired">Expired Prescriptions</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date prescribed</th>
              <th>Expiring Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for expired prescriptions */}
            <tr>
              <td>Prescription 1</td>
              <td>YYYY-MM-DD</td>
              <td>YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>Prescription 2</td>
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

export default PrescriptionPage;
