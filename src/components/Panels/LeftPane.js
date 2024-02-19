import React from 'react';
import './LeftPane.css'

function LeftPane() {
  return (
    <div className="left-pane">
      <img src="Profile.PNG" alt="Profile" />
      <a href="/">My Profile</a>
      {/* Add other components or content specific to the left pane */}
    </div>
  );
}

export default LeftPane;
