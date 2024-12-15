import React from 'react';
import './HowToStayOrganized.css';

const HowToStayOrganized = () => {
  return (
    <section className="how__to__Sec__org">
      <div className="how__to__Sec__org__title">
        <h2>How to Stay Organized with Edusify</h2>
        <p>Follow this step-by-step guide to maximize your productivity with Edusify.</p>
      </div>
      <div className="how__to__Sec__org__steps__container">
        <div className="how__to__Sec__org__step">
          <div className="how__to__Sec__org__step__number">1</div>
          <div className="how__to__Sec__org__step__description">
            <h3>Set Your Goals</h3>
            <p>Start by defining your study goals and tasks using the AI-powered planner.</p>
          </div>
        </div>

        <div className="how__to__Sec__org__step">
          <div className="how__to__Sec__org__step__number">2</div>
          <div className="how__to__Sec__org__step__description">
            <h3>Generate Study Materials</h3>
            <p>Create flashcards and quizzes instantly from your notes using AI.</p>
          </div>
        </div>
  
        <div className="how__to__Sec__org__step">
          <div className="how__to__Sec__org__step__number">3</div>
          <div className="how__to__Sec__org__step__description">
            <h3>Review & Learn</h3>
            <p>Use the AI-powered learning mode to practice and enhance your retention.</p>
          </div>
        </div>
        <div className="how__to__Sec__org__step">
          <div className="how__to__Sec__org__step__number">4</div>
          <div className="how__to__Sec__org__step__description">
            <h3>Track Your Progress</h3>
            <p>Monitor your study streaks and analyze your progress over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStayOrganized;
