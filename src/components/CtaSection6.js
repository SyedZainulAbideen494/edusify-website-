import React, { useState } from "react";
import "./CtaSection6.css";

const CtaSection6 = () => {
  const [isTeacher, setIsTeacher] = useState(false);

  const toggleHandler = () => {
    setIsTeacher(!isTeacher);
  };

  return (
    <section className="cta-section-6">
      <div className="cta-card-6">
        <div className="cta-toggle-container">
          <button
            className={`cta-toggle-btn-left ${!isTeacher ? "active" : ""}`}
            onClick={toggleHandler}
          >
            Students
          </button>
          <button
            className={`cta-toggle-btn-right ${isTeacher ? "active" : ""}`}
            onClick={toggleHandler}
          >
            Teachers
          </button>
        </div>
        
        <div className="cta-text-6">
          {isTeacher ? (
            <div>
              <h2>How Teachers Can Use Edusify</h2>
              <ul>
                <li> Create Rooms and Invite Students</li>
                <li> Share Edusify Notes with Class</li>
                <li> Add Class Tasks and Track Progress</li>
                <li> Post Important Updates for Students</li>
                <li> Share Quizzes to Assess Understanding</li>
                <li> Track Student Activity in Rooms</li>
              </ul>
            </div>
          ) : (
            <div>
              <h2>How Students Can Use Edusify</h2>
              <ul>
                <li> Create and Manage Personal Study Schedules</li>
                <li> Take Notes with Text, Images, and Videos</li>
                <li> Generate Flashcards and Quizzes for Active Learning</li>
                <li> Stay on Track with Daily Tasks and Reminders</li>
                <li> Join Rooms to Engage with Classmates and Teachers</li>
                <li> Track Progress with Pomodoro Sessions and Quizzes</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection6;
