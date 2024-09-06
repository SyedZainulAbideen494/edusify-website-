import React from 'react';
import './PricingSection.css';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const freeFeatures = [
    'Manage up to 10 tasks at a time',
    'Create up to 2 groups',
    'Join up to 10 groups at once',
    'Create up to 15 notes at once',
    '15 math queries per day',
    '15 science queries per day',
    '15 commerce queries per day',
    'Create up to 20 quizzes at a time',
    'Default, non-changeable Pomodoro Timer',
    'Manage up to 20 calendar dates at a time',
  ];

  const premiumFeatures = [
    'Unlimited task management',
    'Create unlimited groups',
    'Join unlimited groups',
    'Create unlimited notes',
    'Unlimited math queries',
    'Unlimited science queries',
    'Unlimited commerce queries',
    'Create unlimited quizzes',
    'Customizable Pomodoro Timer',
    'Unlimited calendar date management',
  ];

  const priceInINR = 50;
  const priceInUSD = (priceInINR / 83).toFixed(2); // Assuming 1 USD = 83 INR

  return (
    <section className="pricing-section">
      <h2>Choose Your Plan</h2>
      <p className="beta-note">Currently in Beta: All features are free, no premium version available for now.</p>
      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="pricing-card">
          <h3>Free Plan</h3>
          <p className="price">$0/month</p>
          <ul className="features-list">
            {freeFeatures.map((feature, index) => (
              <li key={index}>✔️ {feature}</li>
            ))}
          </ul>
          <Link to="/sign-up">
            <span className="cta-btn">
              Select Free Plan
            </span>
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p className="price">${priceInUSD}/month</p>
          <ul className="features-list">
            {premiumFeatures.map((feature, index) => (
              <li key={index}>✔️ {feature}</li>
            ))}
          </ul>
          <Link to="/sign-up">
            <span className="cta-btn">
              Select Premium Plan
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;