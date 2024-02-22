import React from 'react';
import './LeftPane.css'; //eslint-disable-next-line
import { Link } from 'react-router-dom';
import image from '../Images/Profile.png'

// function LeftPane() {
//   return (
//     <div className="left-pane">
//       <img src="Profile.PNG" alt="Profile" />
//       <a href="/">My Profile</a>
//     </div>
//   );
// }

function LeftPane({ currentPage }) {
  let content;

  // Define content based on the current page
  switch (currentPage) {
    case 'prescriptions':
      content = (
        <div className='temp'>
          <img src={image} alt="Profile" />
          <a href="/">My Profile</a>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">My Medical History & Allergies</Link></li>
            <li><Link to="/">My Vaccines</Link></li>
            <li><Link to="/">My Surgeries & Hospitalizations</Link></li>
            <li><Link to="/">My Lab Tests</Link></li>
            <li><Link to="/">My Scans</Link></li>
          </ul>
        </div>
      );
      break;
    // Add cases for other pages if needed
    default:
      content = (
        <div className="temp">
          <img src={image} alt="Profile" />
          <a href="/">My Profile</a>
        </div>
      ); // Default content if the page doesn't have specific content
  }

  return (
    <div className="left-panel">
      {content}
    </div>
  );
}

export default LeftPane;
