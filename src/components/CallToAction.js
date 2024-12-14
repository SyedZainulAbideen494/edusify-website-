import React from 'react';
import './CallToAction.css'; // Ensure you have this CSS file for styles
import logo from '../images/Edusify-removebg-preview.png';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section__Call__to__act">
      <div className="cta-card__Call__to__act">
        <img src={logo} alt="Edusify Logo" className="cta-logo__Call__to__act" />
        <h2 className="cta-text__Call__to__act">
          Take Your Productivity to the Next Level with Edusify
        </h2>
        <p className="cta-text__Call__to__act">
          Simplify your student life by accessing all the essential study tools in one app. Start learning smarter today!
        </p>
        <Link to='/get-app'>
        <button className="cta-btn__Call__to__act">Get the App</button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

