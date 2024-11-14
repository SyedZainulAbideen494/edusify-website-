import React, { useEffect, useRef } from 'react';
import './FeaturesSection.css';

const FeaturesOverview = () => {
    const features = [
        {
            icon: 'fa-solid fa-tasks',
            title: 'Planner (To-Do List)',
            description: 'Stay organized with the built-in planner where you can create and manage tasks efficiently. Add tasks manually, or let Edusify’s AI assist you by generating detailed tasks based on available time and work scope.',
        },
        {
            icon: 'fa-solid fa-brain',
            title: 'AI Assistant',
            description: 'Your digital study companion. Ask questions, generate notes, create schedules, or get personalized study tips powered by advanced AI to assist with all academic needs.',
        },
        {
            icon: 'fa-solid fa-file-alt',
            title: 'Notes',
            description: 'Organize your study materials with customizable notes. Add subjects, topics, and personalize with fonts, colors, sizes, or even background images. Use AI to generate notes automatically and save time.',
        },
        {
            icon: 'fa-solid fa-flashcard',
            title: 'Flashcards',
            description: 'Create and review flashcards for effective studying. Categorize them by topic or subject and generate them manually or using AI to reinforce key concepts for exams.',
        },
        {
            icon: 'fa-solid fa-users',
            title: 'Groups',
            description: 'Collaborate in distraction-free environments with classmates. Share notes, quizzes, and documents, and engage in group chats without notifications interrupting your study flow.',
        },
        {
            icon: 'fa-solid fa-pen-alt',
            title: 'AI Quizzes',
            description: 'Create quizzes to test your knowledge or challenge your friends. Generate quizzes manually or let Edusify’s AI create them based on subjects or topics for more efficient exam preparation.',
        },
        {
            icon: 'fa-solid fa-lock',
            title: 'Document Locker',
            description: 'Store important documents like IDs, exam papers, and project files securely. Add password protection for an extra layer of security.',
        },
        {
            icon: 'fa-solid fa-calendar-alt',
            title: 'Calendar',
            description: 'Track important dates like exams, assignments, birthdays, and deadlines with the built-in calendar. Never miss an important date again with helpful reminders.',
        },
        {
            icon: 'fa-solid fa-clock',
            title: 'Pomodoro Timer',
            description: 'Stay focused with the Pomodoro timer. Track study and break sessions, monitor productivity, and switch between dark and light themes for a personalized experience.',
        },
        {
            icon: 'fa-solid fa-share-alt',
            title: 'Notes & Flashcards Sharing',
            description: 'Share your notes and flashcards with others or browse content shared by fellow students to enhance your learning experience.',
        },
        {
            icon: 'fa-solid fa-users-cog',
            title: 'Collaborative Study Groups',
            description: 'Form and join study groups with friends or classmates. Share resources, collaborate on projects, and participate in real-time discussions within the app.',
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
