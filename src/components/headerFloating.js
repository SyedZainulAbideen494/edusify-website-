import React from 'react';
import './headerFloating.css'; // Import the CSS file
import logo from '../images/1722866972968-removebg-preview.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header className="nav">
      <div className="nav__logo">
        <img src={logo} alt="EduSify Logo" />
      </div>
                <Link to="/get-app" style={{ textDecoration: 'none' }}>
      <button className="nav__btn">Get App</button>
      </Link>
    </header>
  );
};

export default NavigationBar;
