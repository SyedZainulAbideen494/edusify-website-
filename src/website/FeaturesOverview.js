import React from 'react';
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
            <a className="cta-btn-features-section" onClick={handleDownload}>
                Download for Android
            </a>
        </section>
    );
};

export default FeaturesOverview;
