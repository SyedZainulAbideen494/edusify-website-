import React, { useEffect, useRef } from 'react';
import './FeaturesSection.css';

const FeaturesOverview = () => {
    const features = [
        {
            icon: 'fa-solid fa-tasks',
            title: 'Task Management',
            description: 'Organize assignments, projects, and deadlines with an intuitive task management system. Set priorities, due dates, and reminders to stay on top of your academic responsibilities.',
        },
        {
            icon: 'fa-solid fa-users',
            title: 'Collaborative Study Groups',
            description: 'Form and join study groups with friends or classmates. Share notes, resources, and engage in real-time discussions.',
        },
        {
            icon: 'fa-solid fa-palette',
            title: 'Aesthetic Notes & Flashcards',
            description: 'Create and customize visually appealing notes and flashcards. Use various fonts, colors, and layouts to make studying engaging.',
        },
        {
            icon: 'fa-solid fa-clock',
            title: 'Pomodoro Timer',
            description: 'Boost productivity with a built-in Pomodoro timer. Set study intervals and breaks to maintain focus and avoid burnout.',
        },
        {
            icon: 'fa-solid fa-music',
            title: 'Music Player',
            description: 'Enjoy your favorite study playlists within the app. Access curated playlists to enhance concentration and relaxation during study sessions.',
        },
        {
            icon: 'fa-solid fa-calendar',
            title: 'Calendar & Reminders',
            description: 'Stay organized with a calendar that tracks study sessions, deadlines, and events.',
        },
        {
            icon: 'fa-solid fa-share-alt',
            title: 'Social Feed',
            description: 'Share your achievements, study progress, and motivational quotes with the Edusify community.',
        },
        {
            icon: 'fa-solid fa-calculator',
            title: 'Math & Science Helper',
            description: 'Get instant assistance with math problems and science concepts. Simplify complex equations with built-in tools.',
        },
        {
            icon: 'fa-solid fa-pen',
            title: 'Quizzes & Flashcards',
            description: 'Test your knowledge with customizable quizzes and flashcards. Tailor study materials to your subjects and learning style.',
        },
        {
            icon: 'fa-solid fa-exchange-alt',
            title: 'Notes & Flashcards Sharing',
            description: 'Share your notes and flashcards with others or browse shared content from fellow students.',
        },
    ];

    const cardsRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view'); // Remove class when out of view
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);

        cardsRef.current.forEach(card => {
            observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="features__section">
            <h2 className="features__header">Features</h2>
            <div className="features__grid">
                {features.map((feature, index) => (
                    <div 
                        className="feature__card" 
                        key={index} 
                        ref={el => cardsRef.current[index] = el}
                    >
                        <i className={feature.icon} style={{ fontSize: '1.5rem', color: '#fff' }}></i>
                        <h3 className="feature__title">{feature.title}</h3>
                        <p className="feature__description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesOverview;
