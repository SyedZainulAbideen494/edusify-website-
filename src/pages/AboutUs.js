import React from "react";
import { Helmet } from "react-helmet";
import "./AboutUs.css";
import zain from "../images/photo_2_2025-01-07_23-47-34.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about Edusify, the productivity app for students, and meet our founder Syed Zain-ul-Abideen. Discover features that transform learning and testimonials from students."
        />
        <meta
          name="keywords"
          content="Edusify, student productivity app, study app, Syed Zain-ul-Abideen, AI study tools, flashcards, planner, AI assistant"
        />
        <meta name="author" content="Syed Zain-ul-Abideen" />
        <meta
          property="og:title"
          content="About Us - Edusify | Revolutionizing Student Productivity"
        />
        <meta
          property="og:description"
          content="Discover how Edusify simplifies studying for students worldwide and meet our visionary founder Syed Zain-ul-Abideen."
        />
        <meta property="og:image" content={zain} />
        <meta property="og:url" content="https://edusify-download.vercel.app/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="about-us-hero">
        <h1 className="hero-title">Edusify</h1>
        <p className="hero-subtitle">Revolutionizing student productivity.</p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Empower students worldwide by simplifying the way they study,
            organize, and achieve their goals. Edusify bridges the gap between
            technology and productivity to create smarter learners.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Discover Edusify</h2>
        <div className="features-content">
          <div className="feature">
            <h3>Planner</h3>
            <p>Stay organized with AI-powered task management.</p>
          </div>
          <div className="feature">
            <h3>Flashcards</h3>
            <p>Enhance memory retention with active recall tools.</p>
          </div>
          <div className="feature">
            <h3>AI Assistant</h3>
            <p>Generate notes, schedules, and more at the tap of a button.</p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="founder-section">
        <img
          src={zain}
          alt="edusify founder"
          title="Founder - Syed Zain-ul-Abideen"
          className="founder-image"
        />
        <div className="founder-content">
          <h2 className="section-title">Meet Our Founder</h2>
          <p className="section-text">
            <strong>Syed Zain-ul-Abideen</strong>, at just 17, created Edusify
            to empower students like himself. Despite challenges, he built the
            app in two weeks, driven by a vision to transform learning for
            students everywhere.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Students Say</h2>
        <div className="testimonials-content">
          <div className="testimonial">
            <p>
              "Edusify has transformed how I study. It's simple, effective, and
              exactly what I needed."
            </p>
            <span>- Aditi Sharma</span>
          </div>
          <div className="testimonial">
            <p>
              "The AI features are amazing! I save hours every week using this
              app."
            </p>
            <span>- Rahul Mehta</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Your Productivity Revolution Awaits</h2>
        <p className="cta-text">
          Join thousands of students already transforming their learning
          experience with Edusify.
        </p>
        <Link to="/get-app">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
