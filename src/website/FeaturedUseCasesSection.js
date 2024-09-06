import React from 'react';
import './FeaturedUseCasesSection.css';
import { Link } from 'react-router-dom';

const FeaturedUseCasesSection = () => {
  return (
    <section className="featured-use-cases-section">
      <h2>How Edusify Fits Your Needs</h2>
      <p className="intro-text">
        Explore how Edusify can be a game-changer in various scenarios, making your learning experience more effective and enjoyable.
      </p>
      <div className="use-cases-container">
        <div className="use-case-item">
    
          <h3>Exam Preparation</h3>
          <p>Prepare for your exams efficiently with customizable quizzes, flashcards, and progress tracking.</p>
        </div>
        <div className="use-case-item">
          
          <h3>Group Projects</h3>
          <p>Collaborate with classmates on group projects using study groups and shared resources.</p>
        </div>
        <div className="use-case-item">
        
          <h3>Daily Study Routine</h3>
          <p>Stay on track with a structured study plan and Pomodoro Timer for focused study sessions.</p>
        </div>
        <div className="use-case-item">
         
          <h3>Lifelong Learning</h3>
          <p>Use Edusify to organize and enhance your learning journey, whether for personal growth or professional development.</p>
        </div>
      </div>
      <Link to='/sign-up'>
      <a className="cta-button">Start Your Journey</a>
      </Link>
    </section>
  );
};

export default FeaturedUseCasesSection;
