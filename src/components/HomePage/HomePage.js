import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <div className="main-panel">

        <h1>Home</h1>

        <Link to="/prescriptions">My Prescriptions</Link>
        <Link to="/medical-history">My Medical History & Allergies</Link>
        <Link to="/vaccines">My Vaccines</Link>
        <Link to="/surgeries-and-hospitalizations">My Surgeries & Hospitalizations</Link>
        <Link to="/lab">My Lab Tests</Link>
        <Link to="/scans">My Scans</Link>
        
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

export default HomePage;
