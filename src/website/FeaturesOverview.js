import React, { useEffect } from 'react';
import './FeaturesOverview.css'; // Ensure to import the CSS file
import { API_ROUTES } from '../app_modules/apiRoutes';

const handleDownload = async () => {
  const response = await fetch(API_ROUTES.downloadAndroid, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  if (!response.ok) {
    console.error('Failed to download file');
    return;
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Edusify.apk'; // Replace with your file name
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const FeaturesOverview = () => {
    const features = [
        {
            icon: 'fa-solid fa-tasks',
            title: 'Task Management',
            description: 'Organize assignments, projects, and deadlines with an intuitive task management system. Set priorities, due dates, and reminders to stay on top of your academic responsibilities. Track progress by creating and marking tasks as complete.',
        },
        {
            icon: 'fa-solid fa-users',
            title: 'Collaborative Study Groups',
            description: 'Form and join study groups with friends or classmates. Share notes, resources, and engage in real-time discussions. Enhance teamwork and efficiency on group projects.',
        },
        {
            icon: 'fa-solid fa-palette',
            title: 'Aesthetic Notes & Flashcards',
            description: 'Create and customize visually appealing notes and flashcards. Use various fonts, colors, and layouts to make studying engaging. Share your creations with peers or keep them private for personal study.',
        },
        {
            icon: 'fa-solid fa-clock',
            title: 'Pomodoro Timer',
            description: 'Boost productivity with a built-in Pomodoro timer. Set study intervals and breaks to maintain focus and avoid burnout. Customize timer settings to fit your study routine.',
        },
        {
            icon: 'fa-solid fa-music',
            title: 'Music Player',
            description: 'Enjoy your favorite study playlists within the app. Access curated playlists to enhance concentration and relaxation during study sessions.',
        },
        {
            icon: 'fa-solid fa-calendar',
            title: 'Calendar & Reminders',
            description: 'Stay organized with a calendar that tracks study sessions, deadlines, and events. Set custom reminders to ensure you never miss an important task or appointment.',
        },
        {
            icon: 'fa-solid fa-share-alt',
            title: 'Social Feed',
            description: 'Share your achievements, study progress, and motivational quotes with the Edusify community. Connect with like-minded students and stay motivated.',
        },
        {
            icon: 'fa-solid fa-calculator',
            title: 'Math & Science Helper',
            description: 'Get instant assistance with math problems and science concepts. Simplify complex equations, conversions, and calculations with built-in tools.',
        },
        {
            icon: 'fa-solid fa-pen',
            title: 'Quizzes & Flashcards',
            description: 'Test your knowledge with customizable quizzes and flashcards. Tailor study materials to your subjects and learning style, and share quizzes with friends to challenge each other.',
        },
        {
            icon: 'fa-solid fa-exchange-alt',
            title: 'Notes & Flashcards Sharing',
            description: 'Share your notes and flashcards with others or browse shared content from fellow students. Collaborate on study materials to enhance your learning experience.',
        },
    ];

    // IntersectionObserver setup for scroll animations
    useEffect(() => {
      const featureCards = document.querySelectorAll('.feature-card');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      });

      featureCards.forEach(card => {
        observer.observe(card);
      });

      return () => {
        featureCards.forEach(card => observer.unobserve(card));
      };
    }, []);

    return (
        <section className="features-overview">
            <h2>Why Edusify?</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">
                            <i className={feature.icon}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
  <a
    href={API_ROUTES.downloadAndroid}
    className="btn btn-android"
    download="Edusify.apk"
    style={{ textAlign: 'center' }}
  >
    <button className="download-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        id="download"
        viewBox="0 0 24 24"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"
        ></path>
      </svg>
      <span className="download-text" style={{ marginLeft: '8px' }}>Android</span>
    </button>
  </a>
</div>

        </section>
    );
};

export default FeaturesOverview;
