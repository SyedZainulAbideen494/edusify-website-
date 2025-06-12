import React from 'react';
import './HeaderSection.css';
import logo from '../images/1722866972968-removebg-preview.png';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  return (
    <header className="header-section">
      <div className="hero-section">
        <h1 className="hero-title">
          AI tools for smarter <span>student productivity</span>
        </h1>
        <p className="hero-subtitle">
          All-in-one AI suite to supercharge your learning journey.
        </p>
        <div className="user-stats">
          <div className="user-images">
            <img src="https://srv594954.hstgr.cloud/1730470065817.jpg" alt="User 1" />
            <img src="https://srv594954.hstgr.cloud/1738270237274.jpg" alt="User 2" />
            <img src="https://srv594954.hstgr.cloud/1731370212317.jpg" alt="User 3" />
            <img src="https://srv594954.hstgr.cloud/1734504401466.jpg" alt="User 4" />
          </div>
          <div className="stats-text">
            Trusted by <strong>3,000,000+</strong> students globally.
          </div>
        </div>
        <div className="button-container__hero">
          <Link to="/get-app" style={{ textDecoration: 'none' }}>
            <button className="glass-button">
              Get the App
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
