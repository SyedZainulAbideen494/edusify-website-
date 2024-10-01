import React, { useEffect } from 'react';
import './FeaturedUseCasesSection.css';

const FeaturedUseCasesSection = ({ onStartJourney }) => { // Accept the onStartJourney prop
  useEffect(() => {
    const revealOnScroll = () => {
      const elementsToReveal = document.querySelectorAll('.fade-in__user__cases');

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
    <section className="featured-use-cases-section__user__cases">
      <h2 className="fade-in__user__cases">How Edusify Fits Your Needs</h2>
      <p className="intro-text fade-in__user__cases">
        Explore how Edusify can transform your learning experience.
      </p>
      <div className="use-cases-container__user__cases">
        {[
          {
            title: 'Exam Preparation',
            description: 'Master your exams with customizable quizzes and progress tracking.',
          },
          {
            title: 'Group Projects',
            description: 'Collaborate seamlessly with classmates using shared resources.',
          },
          {
            title: 'Daily Study Routine',
            description: 'Enhance focus with a structured plan and Pomodoro Timer.',
          },
          {
            title: 'Lifelong Learning',
            description: 'Organize your learning journey for personal growth or career advancement.',
          },
        ].map((useCase, index) => (
          <div className="use-case-item__user__cases fade-in__user__cases" key={index}>
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
      <button className="cta-button fade-in__user__cases" onClick={onStartJourney}>Start Your Journey</button> {/* Use the onStartJourney function */}
    </section>
  );
};

export default FeaturedUseCasesSection;
