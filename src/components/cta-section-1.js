import React from "react";
import "./CtaSection1.css";
import { Link } from "react-router-dom";

const CtaSection1 = () => {
  return (
    <section className="cta-section-1">
      <div className="cta-card">
        <div className="cta-text">
          <h2>AI-Powered, All-in-One Solution</h2>
          <p>
            Streamline your studies, enhance productivity, and unlock your potential with Edusify’s smart tools.
          </p>
        </div>
        <div className="cta-button">
          <Link to='/get-app'>
          <button className="cta-btn">Get AI Tools</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection1;

