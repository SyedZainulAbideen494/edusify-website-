import React, { useEffect } from 'react';
import './KeyBenefitsSection.css';

const KeyBenefitsSection = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const elementsToReveal = document.querySelectorAll('.fade-in, .fade-in-left, .benefit-item');

      elementsToReveal.forEach((item) => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section className="key-benefits-section">
      <h2 className="fade-in">Why Choose Edusify?</h2>
      <p className="intro-text fade-in">
        Discover the core benefits of using Edusify and see how it can transform your study routine.
      </p>
      <div className="benefits-container">
        <div className="benefit-item">
          <div className="first-content">
            <h3>Streamlined Learning</h3>
          </div>
          <div className="second-content">
            <p>Organize all your study materials and tasks in one place for a more efficient learning experience.</p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="first-content">
            <h3>Enhanced Productivity</h3>
          </div>
          <div className="second-content">
            <p>Use tools like the Pomodoro Timer and task manager to boost your productivity and focus.</p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="first-content">
            <h3>Collaborative Learning</h3>
          </div>
          <div className="second-content">
            <p>Join study groups, share resources, and collaborate with peers for a more interactive study session.</p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="first-content">
            <h3>Personalized Study</h3>
          </div>
          <div className="second-content">
            <p>Customize your study environment with personalized themes and content tailored to your needs.</p>
          </div>
        </div>
      </div>
      <a href="#features" className="cta-button fade-in">Explore Edusify</a>
    </section>
  );
};

export default KeyBenefitsSection;
