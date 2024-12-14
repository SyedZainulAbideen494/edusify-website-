import React from "react";
import "./CtaSection4.css";
import { Link } from "react-router-dom";

const CtaSection4 = () => {
  return (
    <section className="cta-section-1">
      <div className="cta-card">
        <div className="cta-icon__cta__4">
        
        </div>
        <div className="cta-text">
          <h2>Best Free App for Students</h2>
          <p>
            Unlock your full potential with Edusify — the most powerful, free,
            and easy-to-use productivity app for students.
          </p>
        </div>
        <div className="cta-button">
          <Link to='/get-app'>
          <button className="cta-btn">Download Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection4;
