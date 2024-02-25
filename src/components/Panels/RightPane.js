// RightPanel.js
import React from 'react';
import './RightPane.css'

function RightPanel({ currentPage }) {
  let content;

  // Define content based on the current page
  switch (currentPage) {
    case 'prescriptions':
      content = (
        <div>
          <h2 id='prescription'>View Prescriptions</h2>
          <ul className='list'>
            <li><a href="#active">Active</a></li>
            <li><a href="#to-renew">To Renew</a></li>
            <li><a href="#expired">Expired</a></li>
          </ul>
        </div>
      );
      break;
      case 'medical-history':
      content = (
        <div>
          <h2 id='prescription'>Jump to</h2>
          <ul className='list'>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#conditions">My Conditions</a></li>
            <li><a href="#family">My Family's History</a></li>
            <li><a href="#allergies">My Allergies</a></li>
            <li><a href="#providers">Healthcare Providers</a></li>
          </ul>
        </div>
      );
      break;
      case 'vaccines':
      content = (
        <div>
          <h2 id='prescription'>Jump to</h2>
          <ul className='list'>
            <li><a href="#record">Vaccine Record</a></li>
            <li><a href="#recommended">Recommended Vaccines</a></li>
          </ul>
        </div>
      );
      break;
      case 'surgeries-and-hospitalizations':
      content = (
        <div>
          <h2 id='prescription'>Jump to</h2>
          <ul className='list'>
            <li><a href="#surgeries">My Surgeries</a></li>
            <li><a href="#recommended">My Hospitalizations</a></li>
          </ul>
        </div>
      );
      break;
      case 'lab':
      content = (
        <div>
          <h2 id='prescription'>Jump to</h2>
          <ul className='list'>
            <li><a href="#blood">My Blood Tests</a></li>
            <li><a href="#urine">My Urine Tests</a></li>
            <li><a href="#other">My Other Tests</a></li>
          </ul>
        </div>
      );
      break;
      case 'scans':
      content = (
        <div>
          <h2 id='prescription'>Jump to</h2>
          <ul className='list'>
            <li><a href="#xray">My X-Ray Scans</a></li>
            <li><a href="#ct">My CT Scans</a></li>
            <li><a href="#us">My Ultrasounds</a></li>
          </ul>
        </div>
      );
      break;
    // Add cases for other pages if needed
    default:
      content = null; // Default content if the page doesn't have specific content
  }

  return (
    <div className="right-panel">
      {content}
    </div>
  );
}

export default RightPanel;
