import React from "react";
import { Helmet } from "react-helmet";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>The Journey of Edusify: From Idea to App</title>
        <meta
          name="description"
          content="Explore the inspiring journey of Edusify, a productivity app created by a 17-year-old student to revolutionize student life."
        />
        <meta name="keywords" content="Edusify, Productivity App, Student Life, App Development, Coding Journey" />
      </Helmet>

      <div className="container__blog__page">
        <header className="header__blog__page">
          <h1 className="title__blog__page">The Journey of Edusify: From Idea to App</h1>
          <p className="subtitle__blog__page">
            How a young developer turned a dream into a student productivity app.
          </p>
        </header>

        <main className="content__blog__page">
          <section className="section__blog__page">
            <h2 className="section__title__blog__page">Inspiration Behind Edusify</h2>
            <p className="text__blog__page">
              My inspiration for Edusify stemmed from two things: my love for coding and the clear gap in the market for a
              comprehensive student productivity platform. I was frustrated with poorly designed apps and wanted an
              all-in-one solution to help students stay organized, focused, and productive—without unnecessary clutter.
            </p>
          </section>

          <section className="section__blog__page">
            <h2 className="section__title__blog__page">Overcoming Early Challenges</h2>
            <p className="text__blog__page">
              The biggest challenge I faced wasn’t coding—it was getting my app recognized. After my college professor
              didn’t share it with students as I had hoped, I turned to organic marketing on Instagram, which initially
              didn’t produce great results. However, with support from my dad, who believed in the app’s potential, I ran
              targeted Instagram ads. This marked a turning point, helping Edusify gain traction.
            </p>
          </section>

          <section className="section__blog__page">
            <h2 className="section__title__blog__page">The Development Process</h2>
            <p className="text__blog__page">
              Edusify started with core features like a to-do list, calendar, quizzes, and notes. As I developed the app,
              I kept innovating, adding new features to make the app more valuable for students. It was an exciting
              journey of continuous improvement.
            </p>
          </section>

          <section className="section__blog__page">
            <h2 className="section__title__blog__page">Core Features of Edusify</h2>
            <ul className="list__blog__page">
              <li className="list-item__blog__page">AI-Powered Quiz Generator</li>
              <li className="list-item__blog__page">Pomodoro Timer with Customizable Themes</li>
              <li className="list-item__blog__page">AI Assistant for Notes and Scheduling</li>
              <li className="list-item__blog__page">Task Manager & Planner</li>
              <li className="list-item__blog__page">Notes & Flashcards</li>
            </ul>
          </section>

          <section className="section__blog__page">
            <h2 className="section__title__blog__page">Positive Feedback and Future Plans</h2>
            <p className="text__blog__page">
              Edusify has received overwhelmingly positive feedback, with users praising its intuitive design and
              effectiveness. My goal is to expand Edusify globally, grow the team, and ensure the core functionality
              remains free while offering premium features affordably.
            </p>
          </section>

          <section className="section__blog__page">
            <h2 className="section__title__blog__page">Advice for Aspiring Developers</h2>
            <p className="text__blog__page">
              My advice for young developers is simple: start coding and keep iterating. Don’t wait for the perfect idea
              or moment—just begin. Challenges are part of the journey, but with persistence and passion, you’ll achieve
              your vision.
            </p>
          </section>
        </main>

        <footer className="footer__blog__page">
          <p className="footer-text__blog__page">© 2024 Edusify. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Blog;
