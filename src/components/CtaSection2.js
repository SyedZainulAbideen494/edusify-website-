import React from "react";
import "./CtaSection2.css";
import { Link } from "react-router-dom";

const CtaSection2 = () => {
  return (
    <section className="cta-section-2__cta__2">
      <div className="cta-card__cta__2">
        <div className="cta-icon__cta__2">
          {/* Inline PDF Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="48px"
            height="48px"
          >
            <path d="M20 2H8c-1.1 0-2 .9-2 2v4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h6v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 18V10h2v8H4zm10 2h-2v-2h2v2zm4-10h-4V6h4v4z" />
          </svg>
        </div>
        <div className="cta-text__cta__2">
          <h2>Transform PDFs into Flashcards & Quizzes</h2>
          <p>
            Generate flashcards and quizzes instantly from PDFs and notes with
            Edusify’s powerful AI.
          </p>
        </div>
        <div className="cta-button__cta__2">
          <a href="https://edusify.vercel.app/download-app">
          <button className="cta-btn__cta__2">Try It Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection2;
