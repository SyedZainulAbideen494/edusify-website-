import React from "react";
import "./CtaSection7.css";
import { Link } from "react-router-dom";

const CtaSection7 = () => {
  return (
    <section className="cta-section-7">
      <div className="cta-card-7">
        <div className="cta-icon-7">
          {/* Icon for Personalization and AI-powered features */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="48px"
            height="48px"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <div className="cta-text-7">
          <h2>Edusify: Personalize Your Study Journey</h2>
          <p>
            Experience complete control over your study routine with Edusify. Customize sticky notes, track your performance with AI-generated reports, and share your success as images. The app is designed to adapt to YOU!
          </p>
          <ul>
            <li>Customize sticky notes to fit your study style.</li>
            <li>Get personalized AI-powered weekly and monthly performance reports.</li>
            <li>Download and share stats images on your social media to celebrate progress!</li>
          </ul>
        </div>
        <div className="cta-button-7">
          <Link to="/get-app">
            <button className="cta-btn-7">Start Personalizing Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection7;
