import React from 'react';
import './headerFloating.css'; // Import the CSS file
import logo from '../images/1722866972968-removebg-preview.png';

const NavigationBar = () => {
  return (
    <header className="nav">
      <div className="nav__logo">
        <img src={logo} alt="EduSify Logo" />
      </div>
      <button className="nav__btn">Get App</button>
    </header>
  );
};

export default NavigationBar;
