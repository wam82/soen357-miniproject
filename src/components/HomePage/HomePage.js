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
        <a href="/">My Vaccines</a>
        <a href="/">My Surgeries & Hospitalizations</a>
        <a href="/">My Lab Tests</a>
        <a href="/">My Scans</a>
        <a href="/">My Photos</a>
        <a href="/">Take a Photo</a>
        
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
