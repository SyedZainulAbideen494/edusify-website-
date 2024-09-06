import React from 'react';
import './KeyBenefitsSection.css';

const KeyBenefitsSection = () => {
  return (
    <section className="key-benefits-section">
      <h2>Why Choose Edusify?</h2>
      <p className="intro-text">
        Discover the core benefits of using Edusify and see how it can transform your study routine.
      </p>
      <div className="benefits-container">
        <div className="benefit-item">
      
          <h3>Streamlined Learning</h3>
          <p>Organize all your study materials and tasks in one place for a more efficient learning experience.</p>
        </div>
        <div className="benefit-item">
        
          <h3>Enhanced Productivity</h3>
          <p>Use tools like the Pomodoro Timer and task manager to boost your productivity and focus.</p>
        </div>
        <div className="benefit-item">
         
          <h3>Collaborative Learning</h3>
          <p>Join study groups, share resources, and collaborate with peers for a more interactive study session.</p>
        </div>
        <div className="benefit-item">
        
          <h3>Personalized Study Experience</h3>
          <p>Customize your study environment with personalized themes and content tailored to your needs.</p>
        </div>
      </div>
      <a href="#features" className="cta-button">Explore Edusify</a>
    </section>
  );
};

export default KeyBenefitsSection;
