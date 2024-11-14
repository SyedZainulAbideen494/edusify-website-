import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  // Founder data is embedded directly in the component
  const founderInfo = {
    name: "Syed Zain-ul-Abideen",
    title: "Founder & CEO of Edusify",
    bio: `
      Syed Zain-ul-Abideen is the visionary founder and CEO of Edusify, an innovative productivity app designed to streamline the academic experience for students. Despite a humble beginning as an average student, Zain-ul-Abideen's passion for solving common student challenges led to the creation of Edusify. The app offers tools like task management, flashcards, note-taking, and more to help students stay organized and improve their productivity.
    `,
    achievements: [
      "Founded Edusify, a $2M valued app.",
      "Launched Edusify with over 1,500 users and 100+ daily active users.",
      "Developed key features like AI assistant, Pomodoro timer, flashcards, and document locker."
    ],
    vision: `
      Zain-ul-Abideen’s vision is to constantly improve the student experience by listening to feedback and integrating helpful features. The aim is to create a platform that not only helps students manage their tasks but also motivates them to succeed academically.
    `,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/syedzainulabideen/",
      twitter: "https://twitter.com/syedzainulabideen",
    }
  };

  return (
    <div className="about-us-container">
      <div className="container">
        <h2 className="about-us-title">About the Founder</h2>
        <div className="founder-info">
          <h3 className="founder-name">{founderInfo.name}</h3>
          <p className="founder-title">{founderInfo.title}</p>
          <p className="founder-description">{founderInfo.bio}</p>

          <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>Achievements:</h4>
          <ul>
            {founderInfo.achievements.map((achievement, index) => (
              <li className="achievement-item" key={index}>{achievement}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: '30px', marginBottom: '30px' }}>Vision:</h4>
          <p>{founderInfo.vision}</p>


        </div>
      </div>
    </div>
  );
};

export default AboutUs;
