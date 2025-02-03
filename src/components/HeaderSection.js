import React from 'react';
import './HeaderSection.css'; // Import the CSS file
import logo from '../images/1722866972968-removebg-preview.png'
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  return (
    <header className="header-section">
    {/* Top Navigation Bar */}
    <nav className="navbar">
      <div className="logo"><img src={logo}/></div>
      <div className="nav-links">
      <Link to='/get-app'>
        <button className="nav-button">Get App</button>
        </Link>
      {/*  <div className="menu-icon">☰</div>*/} 
      </div>
    </nav>

    {/* Hero Section */}
    <div className="hero-section">
      <h1 className="hero-title">
      AI tools for smarter <span>student productivity</span>
      </h1>
      <p className="hero-subtitle">
      AI-powered, smart tools all in one place for you
      </p>
      <div className="user-stats">
        <div className="user-images">
          {/* Dummy User Avatars */}
          <img src="https://srv594954.hstgr.cloud/1730470065817.jpg" alt="User 1" />
          <img src="https://srv594954.hstgr.cloud/1738270237274.jpg" alt="User 2" />
          <img src="https://srv594954.hstgr.cloud/1731370212317.jpg" alt="User 3" />
          <img src="https://srv594954.hstgr.cloud/1734504401466.jpg" alt="User 4" />
        </div>
        <div className="stats-text">
          <strong>300,000 +</strong> <br />
          Students use Edusify.
        </div>
      </div>
      <div className="button-container__hero">
      <Link to='/get-app' style={{textDecoration: 'none'}}>
      <button className="learn-more">
      Get App
    </button>
      </Link>
    </div>
    </div>
  </header>
  );
};

export default HeaderSection;
