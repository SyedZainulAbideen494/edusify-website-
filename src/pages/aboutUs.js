import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutUs.css';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <Helmet>
        <title>Edusify - Founder | Syed Zain-ul-Abideen</title>
        <meta name="description" content="Meet Syed Zain-ul-Abideen, founder and CEO of Edusify, an innovative productivity app revolutionizing student life." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Syed Zain-ul-Abideen",
            "jobTitle": "Founder & CEO",
            "affiliation": {
              "@type": "Organization",
              "name": "Edusify"
            }
          })}
        </script>
      </Helmet>
      <div className="about-content">
      <button className="back-button-abt" onClick={() => navigate(-1)}>
        ← 
      </button>
        <h1>About Our Founder</h1>
        <h2>Syed Zain-ul-Abideen, Founder & CEO</h2>
        <p>
          Syed Zain-ul-Abideen is the founder and CEO of Edusify, a productivity app designed to transform how students manage their academic tasks. As a high school senior with a vision to impact the tech world, Syed set out to create a tool that makes student life simpler, more organized, and fully digital—all within a single app. Despite being an average student with no prior experience, Syed's drive to solve common challenges faced by students inspired him to take on the challenge of founding Edusify.
        </p>
        
        <h1>The Inspiration Behind Edusify</h1>
        <p>
          While students often juggle multiple apps for productivity—one for Pomodoro timers, another for to-do lists, yet another for notes, and a separate one for AI-powered tools—Syed saw an opportunity to bring these essential tools together in a seamless experience. With Edusify, students can access a range of study and productivity tools, including to-do lists, notes, flashcards, calendars, and even Pomodoro timers, all powered by AI to save time and enhance focus.
        </p>
        <p>
          Additionally, Syed recognized that existing productivity apps for students lacked an engaging, interactive design, often feeling dull and unresponsive to student feedback. At Edusify, user feedback is at the heart of everything, with the app's user interface being improved daily based on the needs and suggestions of the community.
        </p>
        
        <h1>The Impact of Edusify on Student Life</h1>
        <p>
          Edusify was created with a mission to make studying more efficient and manageable. By moving key study tools into a single, easy-to-use digital platform, Edusify aims to reduce the clutter of traditional study materials. With the flashcard feature, students no longer need extra paper to create study aids; they can use AI to generate flashcards instantly, saving time and reducing waste. The integrated Pomodoro timer helps students maintain focus without needing a separate app, and everything from notes to reminders is accessible with just a few taps.
        </p>
        
        <h1>Our Journey and Milestones</h1>
        <p>
          In under a month since its launch, Edusify has reached over 1,500 users, showing strong early traction and engagement. The app’s unique approach and student-centered features have led to a $2 million valuation within the first month, a testament to its growing impact and potential in the EdTech market.
        </p>
        
        <h1>Looking Ahead</h1>
        <p>
          Syed's vision for Edusify is to continue enhancing student life by expanding and refining its features based on real user feedback. With a commitment to innovation, Edusify is on a mission to make studying not only more effective but also more enjoyable for students everywhere.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
