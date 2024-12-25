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
          <img src="https://i.pravatar.cc/40?img=1" alt="User 1" />
          <img src="https://i.pravatar.cc/40?img=2" alt="User 2" />
          <img src="https://i.pravatar.cc/40?img=3" alt="User 3" />
          <img src="https://i.pravatar.cc/40?img=4" alt="User 4" />
        </div>
        <div className="stats-text">
          <strong>300,000 +</strong> <br />
          Students use Edusify.
        </div>
      </div>
      <div className="button-container__hero">
      <Link to='/get-app' style={{textDecoration: 'none'}}>
      <button className="btn__website__ehro__get__started__btn">
        <div>GET STARTED</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
          <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4 12.0601H14.17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      </Link>
    </div>
    </div>
  </header>
  );
};

export default HeaderSection;
