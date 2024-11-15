import React from 'react';
import './aboutUs.css'; // Ensure this CSS file contains your provided styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="container">
        <h1 className="about-us-title">About Us</h1>
        <div className="founder-info">
          <h2 className="founder-name">Syed Zain-ul-Abideen</h2>
          <h3 className="founder-title">Founder & CEO of Edusify</h3>
          <p className="founder-description">
            Welcome to <strong>Edusify</strong>, your ultimate student productivity app designed to make studying smarter, more organized, and stress-free.
            <br />
            Despite being an average student with no prior experience in app development, Syed’s determination to solve everyday student struggles led to the creation of Edusify—a platform that combines essential study tools in one seamless app.
          </p>
        </div>
        <h2 className="achievements-title">Our Goal</h2>
        <p className="vision-text">
          At Edusify, our goal is simple: to help students stay productive, focused, and on top of their academic game. We aim to simplify your student life while keeping you motivated and engaged.
        </p>
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-text">
          Our vision is to create a world where every student has the tools they need to succeed at their fingertips. By integrating cutting-edge AI technology and user feedback, we strive to make Edusify more than just an app—it’s your personal academic assistant.
        </p>
        <h2 className="achievements-title">Why Edusify?</h2>
        <ul className="achievements-list">
          <li className="achievement-item">
            <strong>All-in-One Solution:</strong> No need to juggle multiple apps for planning, notes, quizzes, or flashcards. Edusify puts everything in one place.
          </li>
          <li className="achievement-item">
            <strong>AI-Powered Efficiency:</strong> Save time with AI-generated tasks, notes, and quizzes tailored to your needs.
          </li>
          <li className="achievement-item">
            <strong>Student-Centered Design:</strong> Built with feedback from real students, Edusify evolves with you to ensure the best experience.
          </li>
        </ul>
        <div className="social-links">
          <a href="#facebook" target="_blank" rel="noopener noreferrer">
            Instagram
         </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
