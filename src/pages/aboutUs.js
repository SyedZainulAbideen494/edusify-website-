import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutUs.css';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <Helmet>
        <title>Syed Zain-ul-Abideen - Founder & CEO of Edusify</title>
        <meta
          name="description"
          content="Syed Zain-ul-Abideen is the founder and CEO of Edusify, a productivity app transforming student life. Learn about his journey and vision."
        />
        <meta
          name="keywords"
          content="Syed Zain-ul-Abideen, founder of Edusify, CEO of Edusify, Edusify app, productivity app for students, Edusify founder"
        />
        <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Syed Zain-ul-Abideen",
      "jobTitle": "Founder & CEO",
      "affiliation": {
        "@type": "Organization",
        "name": "Edusify"
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

        <h1>About Syed Zain-ul-Abideen, Founder of Edusify</h1>

        <h2>Syed Zain-ul-Abideen, Founder & CEO of Edusify</h2>

        <p>
          Syed Zain-ul-Abideen is the visionary founder and CEO of <strong>Edusify</strong>, a revolutionary productivity app designed to make student life easier. With the goal of simplifying academic tasks, he created Edusify to offer students a powerful suite of digital tools, including to-do lists, AI-powered notes, flashcards, Pomodoro timers, and more—all in one app. Despite being an average student in school with no prior technical experience, Syed's passion for solving student problems fueled his journey to create Edusify.
        </p>

        <h2>The Inspiration Behind Edusify</h2>
        <p>
          As a student, Syed Zain-ul-Abideen noticed that students often relied on multiple apps to handle their academic tasks. From task management apps to Pomodoro timers and note-taking tools, none of these solutions worked seamlessly together. That's when Syed saw the opportunity to bring all these features into one app—Edusify. By integrating AI-powered tools for notes, quizzes, flashcards, and more, Edusify was born as the ultimate all-in-one productivity app for students.
        </p>

        <h2>The Vision of Syed Zain-ul-Abideen</h2>
        <p>
          As the founder of Edusify, Syed Zain-ul-Abideen has always focused on the user experience. His goal is to continuously improve the app based on user feedback and provide a solution that helps students organize their academic life more efficiently. With a passion for innovation and education, Syed has built Edusify to not only help students get better grades but to also save time, reduce stress, and make studying more enjoyable.
        </p>

        <h2>The Impact of Edusify</h2>
        <p>
          Since its launch, Edusify has made a significant impact on students worldwide. The app's unique features, including AI-driven note-taking, personalized reminders, and intuitive task management, have helped over 1,500 users improve their productivity. With Syed Zain-ul-Abideen at the helm, Edusify continues to grow rapidly, gaining recognition and reaching a $2 million valuation in just its first month. Edusify is truly transforming the student experience, thanks to Syed's relentless pursuit of making academic life easier.
        </p>

        <h2>Meet Syed Zain-ul-Abideen - The Founder and Innovator</h2>
        <p>
          Syed Zain-ul-Abideen is not just a founder; he is a visionary and an innovator who strives to make the world a better place for students. His journey from being a regular student with big dreams to creating a multi-million-dollar productivity app is a testament to his hard work, dedication, and passion for helping others succeed.
        </p>

        <h2>Looking Ahead with Syed Zain-ul-Abideen</h2>
        <p>
          The future of Edusify is bright under the leadership of Syed Zain-ul-Abideen. With his commitment to continuous improvement and a deep understanding of student needs, Syed plans to expand Edusify's features, further enhance the user experience, and help millions of students around the world. Edusify is here to stay, and Syed's vision is just getting started.
        </p>

        <p>
          Connect with Syed Zain-ul-Abideen through his professional profiles and stay updated on the latest Edusify news.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
