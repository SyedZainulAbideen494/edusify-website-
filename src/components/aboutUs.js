import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="container">
        <h2 className="about-us-title">About the Founder</h2>
        <div className="founder-info">
          <h3 className="founder-name">Syed Zain-ul-Abideen</h3>
          <p className="founder-title">Founder & CEO of Edusify</p>
          <p className="founder-description">
            Edusify is a productivity app designed to help students stay organized and improve their academic performance. Created by Syed Zain-ul-Abideen, Edusify simplifies the student experience by offering tools for task management, notes, flashcards, and more in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
