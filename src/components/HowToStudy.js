import React from 'react';
import './HowToStudy.css'; // Import the CSS file

const HowToStudy = () => {
    return (
        <div className="how__to__study__section">
            <div className="how__to__study__section__content">
                <div className="how__to__study__section__title">
                    <h2>How to Study for Exams with Edusify</h2>
                </div>
                <div className="how__to__study__section__subtitle">
                    <p>Take your exam prep to the next level with Edusify's powerful study tools.</p>
                </div>
                <div className="how__to__study__section__features">
                    {/* Pomodoro Feature */}
                    <div className="how__to__study__section__feature__card">
                        <div className="how__to__study__section__feature__icon">
                            <i className="fas fa-clock"></i> {/* Clock icon for Pomodoro */}
                        </div>
                        <div className="how__to__study__section__feature__title">
                            Pomodoro Timer
                        </div>
                        <div className="how__to__study__section__feature__description">
                            Maximize your focus with the Pomodoro technique. Stay productive with short study sessions and breaks.
                        </div>
                    </div>

                    {/* Flashcards from PDF */}
                    <div className="how__to__study__section__feature__card">
                        <div className="how__to__study__section__feature__icon">
                            <i className="fas fa-file-pdf"></i> {/* PDF icon for Flashcards */}
                        </div>
                        <div className="how__to__study__section__feature__title">
                            Flashcards from PDFs
                        </div>
                        <div className="how__to__study__section__feature__description">
                            Import your study PDFs and generate interactive flashcards for efficient learning.
                        </div>
                    </div>

                    {/* AI-Powered Quiz */}
                    <div className="how__to__study__section__feature__card">
                        <div className="how__to__study__section__feature__icon">
                            <i className="fas fa-question-circle"></i> {/* Quiz icon */}
                        </div>
                        <div className="how__to__study__section__feature__title">
                            AI-Powered Quiz
                        </div>
                        <div className="how__to__study__section__feature__description">
                            Generate quizzes instantly from your notes or PDFs to test your knowledge.
                        </div>
                    </div>

                    {/* AI Notes */}
                    <div className="how__to__study__section__feature__card">
                        <div className="how__to__study__section__feature__icon">
                            <i className="fas fa-book"></i> {/* Book icon for Notes */}
                        </div>
                        <div className="how__to__study__section__feature__title">
                            AI-Generated Notes
                        </div>
                        <div className="how__to__study__section__feature__description">
                            Let Edusify's AI generate concise and structured notes to make studying easier.
                        </div>
                    </div>

                    {/* AI-Powered Flashcards */}
                    <div className="how__to__study__section__feature__card">
                        <div className="how__to__study__section__feature__icon">
                            <i className="fas fa-brain"></i> {/* Brain icon for AI */}
                        </div>
                        <div className="how__to__study__section__feature__title">
                            AI-Powered Flashcards
                        </div>
                        <div className="how__to__study__section__feature__description">
                            Create flashcards with AI to improve your memory retention with tailored content.
                        </div>
                    </div>

                </div>
                <div className="how__to__study__section__cta__container">
                    <a href="#" className="how__to__study__section__cta__button">Start Studying Now</a>
                </div>
            </div>
        </div>
    );
};

export default HowToStudy;
