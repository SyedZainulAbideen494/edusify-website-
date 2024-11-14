import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="testimonial-section about-us-section">
      <div className="container">
        <h2 className="testimonial-title fade-in animate">About the Founder</h2>
        <div className="founder-info fade-in-bottom animate">
          <h3 className="founder-name">Syed Zain-ul-Abideen</h3>
          <p className="founder-description">
            Syed Zain-ul-Abideen is the founder and CEO of Edusify, a productivity app designed to transform the student experience. Despite being an average student with no prior technical experience, Syed's passion for solving real-world problems led him to create Edusify. His vision is to simplify academic life for students, helping them stay organized and productive through an all-in-one app.
          </p>
        </div>
        <div className="hero-buttons">
          <a
            href="https://www.instagram.com/_syed_zain_ul/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-follow-button"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
