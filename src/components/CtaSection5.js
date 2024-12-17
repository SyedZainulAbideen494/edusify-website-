import React from "react";
import "./CtaSection5.css";
import { Link } from "react-router-dom";

const CtaSection5 = () => {
  return (
    <section className="cta-section-5">
      <div className="cta-container-5">
        <div className="cta-text-container-5">
          <h2 className="cta-heading-5">Join thousands <strong>of</strong> learners for free.</h2>
          <p className="cta-subheading-5">
            <span className="cta-stars-5">★★★★★</span> 4.8 rating
          </p>
          <a href="https://edusify.vercel.app/download-app">
          <button className="cta-btn-5">Sign-up for free</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection5;
