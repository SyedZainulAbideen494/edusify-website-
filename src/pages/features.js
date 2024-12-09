import React from 'react';
import { useNavigate } from 'react-router-dom';
import './features.css';
import { Helmet } from 'react-helmet';

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="features-container">
      <Helmet>
        <title>Edusify - Features</title>
        <meta
          name="description"
          content="Discover the features of Edusify, the ultimate all-in-one productivity app for students. From task management to AI-powered notes and Pomodoro timers, Edusify is designed to enhance student productivity."
        />
        <meta
          name="keywords"
          content="Edusify, productivity app for students, best studying app, features of Edusify, student productivity, Pomodoro timer, AI assistant for students, Edusify planner"
        />
        <meta
          property="og:title"
          content="Edusify - Features"
        />
        <meta
          property="og:description"
          content="Explore the powerful features of Edusify, a productivity app tailored for students. Manage tasks, create study schedules, and enhance your learning experience."
        />
        <meta
          property="og:url"
          content="https://edusify-download.vercel.app/features"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Edusify",
              "description": "Edusify is a productivity app designed to help students organize their study tasks, take notes, manage schedules, and improve focus with Pomodoro timers and AI-powered tools.",
              "brand": "Edusify",
              "url": "https://edusify-download.vercel.app/features",
              "logo": "https://srv594954.hstgr.cloud//1722865454443.png",
              "offers": {
                "@type": "Offer",
                "url": "https://edusify-download.vercel.app",
                "priceCurrency": "USD",
                "price": "Free"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="features-content">
        <button className="back-button-abt" onClick={() => navigate(-1)}>
          ←
        </button>

        <h1>Edusify – Your All-in-One Productivity Hub</h1>
        <p>
          Edusify brings together a comprehensive suite of tools to help students stay organized, motivated, and on top of their academic game. Discover how Edusify’s features can transform your study routine!
        </p>

        <section>
          <h2>Planner (To-Do List)</h2>
          <p>
            <strong>Organize Tasks Efficiently with AI Assistance</strong>
          </p>
          <p>
            Plan, prioritize, and keep track of your tasks with Edusify’s Planner. Add tasks manually by entering titles, descriptions, and due dates, or use AI to help break down a project into manageable steps based on your timeline.
          </p>
          <p>
            <strong>How it Works:</strong> Add tasks manually or with AI-generated recommendations. Enter the task and completion timeframe, and AI will generate sub-tasks. Customize your to-do list with details to stay organized and on schedule.
          </p>
        </section>

        <section>
          <h2>AI Assistant</h2>
          <p>
            <strong>Your Personal Academic Assistant</strong>
          </p>
          <p>
            Get answers, make study schedules, generate notes, and much more with Edusify’s AI Assistant. Like a digital mentor, it’s there whenever you need help or quick information.
          </p>
          <p>
            <strong>How it Works:</strong> Ask questions, create schedules, and even generate notes. Get accurate, personalized responses to streamline your study sessions. Perfect for on-the-go answers and reliable study support.
          </p>
        </section>

        <section>
          <h2>Notes</h2>
          <p>
            <strong>Organized, Customizable Notes with Rich Media Options</strong>
          </p>
          <p>
            Keep your notes organized by subject, and personalize them with colors, fonts, and media. Whether typing in text or generating notes with AI, Edusify makes note-taking both functional and flexible.
          </p>
          <p>
            <strong>How it Works:</strong> Organize notes by subject and customize with colors, font sizes, and styles. Add images, videos, and links for multi-dimensional study resources. Generate notes automatically with AI to save time and enhance clarity.
          </p>
        </section>

        {/* Repeat the same structure for other features like Flashcards, Groups, etc. */}

        <section>
          <h2>Pomodoro Timer</h2>
          <p>
            <strong>Focus with Structured Study Sessions and Track Your Progress</strong>
          </p>
          <p>
            Use the Pomodoro Timer to boost productivity with timed study sessions. Track your study and break time, view stats, and download session summaries as images to share on social media.
          </p>
          <p>
            <strong>How it Works:</strong> Use the Pomodoro technique to study in timed intervals. Track stats like hours studied, break time, and session counts. Switch between light and dark modes, and download stats as an image for social sharing.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Features;
