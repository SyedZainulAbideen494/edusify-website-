import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutUs.css';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <Helmet>
        <title>About Edusify - Productivity App for Students</title>
        <meta
          name="description"
          content="Edusify is a productivity app designed to simplify student life. Learn about its features and the vision of founder Syed Zain-ul-Abideen."
        />
        <meta
          name="keywords"
          content="Edusify, student productivity app, Syed Zain-ul-Abideen, study app, academic management, student app"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Edusify",
              "founder": {
                "@type": "Person",
                "name": "Syed Zain-ul-Abideen"
              },
              "url": "https://edusify-download.vercel.app/about-us",
              "sameAs": [
                "https://www.instagram.com/_syed_zain_ul"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="about-content">
        <button className="back-button-abt" onClick={() => navigate(-1)}>
          ←
        </button>

        <h1>About Edusify</h1>

        <p>
          <strong>Edusify</strong> is a student productivity app designed to transform how students manage their academic tasks and daily routines. With a vision to simplify the student experience, Edusify combines the essential tools needed for studying into a single platform—making it easier for students to stay organized, focused, and productive.
        </p>

        <p>
          Founded by Syed Zain-ul-Abideen, a high school senior with a passion for technology and education, Edusify was created to meet the real challenges faced by students. Whether it's tracking assignments, managing study time, or collaborating with peers, Edusify streamlines all these tasks into one intuitive app.
        </p>

        <p>
          The app has quickly gained traction, with over 600 users in its first month and a $2 million valuation, based purely on user engagement and the app's unique features. By continuously evolving and adapting to user feedback, Edusify strives to be a reliable tool for students to manage their academic lives more effectively.
        </p>

        <h2>Key Features of Edusify</h2>

        <h3>1. Planner (To-Do List)</h3>
        <p>
          Stay organized with the built-in planner where you can create and manage tasks efficiently. You can add tasks manually, or let Edusify’s AI assist you by generating detailed tasks for you based on the time you have available and the scope of your work. Whether you need to track homework, projects, or exams, this tool helps you stay on top of everything.
        </p>

        <h3>2. AI Assistant</h3>
        <p>
          Edusify’s AI Assistant is your digital study companion. You can ask it questions, generate notes, create schedules, or even get personalized study tips. Powered by advanced AI, it’s designed to be a helpful, interactive tool for all your academic needs.
        </p>

        <h3>3. Notes</h3>
        <p>
          Organize all your study materials with customizable notes. Add subjects, organize them by topic, and personalize with different fonts, colors, sizes, and even background images. Plus, you can generate notes automatically with the help of Edusify’s AI—saving you time and effort.
        </p>

        <h3>4. Flashcards</h3>
        <p>
          Create and review flashcards for easy studying. Categorize them by topic or subject and generate them manually or using the AI. This feature helps you reinforce key concepts for exams in an efficient, digital format.
        </p>

        <h3>5. Groups</h3>
        <p>
          Collaborate with friends or classmates in a distraction-free environment. Share notes, quizzes, and documents, and participate in group chats—without any annoying notifications.
        </p>

        <h3>6. Quiz</h3>
        <p>
          Create quizzes to test your knowledge or challenge your friends. Generate quizzes manually or let Edusify’s AI create them for you based on subjects or topics, making exam prep even easier.
        </p>

        <h3>7. Document Locker</h3>
        <p>
          Store important documents like IDs, exam papers, or project files securely in the Document Locker. You can even add a password for extra protection.
        </p>

        <h3>8. Calendar</h3>
        <p>
          Keep track of important events, exams, birthdays, and deadlines with Edusify’s calendar feature. Never miss an important date again.
        </p>

        <h3>9. Pomodoro Timer</h3>
        <p>
          Use the Pomodoro timer to stay focused during study sessions. Track how much time you spend studying, taking breaks, and reviewing stats to improve your productivity. You can switch between dark and light themes for a personalized experience.
        </p>

        <h1>About the Founder: Syed Zain-ul-Abideen, Founder & CEO</h1>
        <p>
          Syed Zain-ul-Abideen is the founder and CEO of Edusify. A high school senior with no prior experience in building apps, Syed was driven by a personal goal to make student life easier and more organized. Faced with the challenges of managing academic tasks, Syed realized that there was a gap in the market for a single app that combined all the essential tools students need. This led to the creation of Edusify.
        </p>

        <p>
          Despite being an average student with no background in tech or business, Syed’s passion for solving problems and helping others motivated him to take on the challenge of founding Edusify. Through his vision, Edusify has quickly grown to over 1,500 users in just one month, and achieved a $2 million valuation, based on strong user engagement and feedback-driven development.
        </p>

        <p>
          Syed believes in the power of technology to make studying more effective, efficient, and enjoyable. At Edusify, he is committed to continuously improving the app by incorporating user feedback to create the best possible experience for students everywhere. Syed’s mission is to make studying and academic management as seamless as possible for students across the world, empowering them to succeed in their education and beyond.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
