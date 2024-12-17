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
          <a href="https://edusify.vercel.app/download-app">
          <button className="cta-btn">Get AI Tools</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection1;

