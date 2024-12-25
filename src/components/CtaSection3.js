import React from "react";
import "./CtaSection3.css";
import { Link } from "react-router-dom";

const CtaSection3 = () => {
  return (
    <section className="cta-section-3__cta__3">
      <div className="cta-card__cta__3">
        <div className="cta-text__cta__3">
          <h2>AI Powered Tools</h2>
          <ul className="cta-features__cta__3">
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI Powered Planner to stay organized effortlessly.
            </li>
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI Powered Quiz Generator for quick assessments.
            </li>
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI Powered Flashcard Generator for efficient learning.
            </li>
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI to get answers instantly to clarify doubts.
            </li>
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI to generate study schedules based on your needs.
            </li>
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI to generate notes for easy study sessions.
            </li>
            <li>
              <span className="checkmark__cta__3">&#10003;</span> AI for better explanations to grasp difficult topics.
            </li>
          </ul>
        </div>
        <div className="cta-button__cta__3">
        <Link to='/get-app'>
          <button className="cta-btn__cta__3">Try It Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection3;
