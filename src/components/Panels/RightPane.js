// RightPanel.js
import React from 'react';

function RightPanel({ currentPage }) {
  let content;

  // Define content based on the current page
  switch (currentPage) {
    case 'prescriptions':
      content = (
        <div>
          <h2 id='prescription'>View Prescriptions</h2>
          <ul>
            <li><a href="#active">Active</a></li>
            <li><a href="#to-renew">To Renew</a></li>
            <li><a href="#expired">Expired</a></li>
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
