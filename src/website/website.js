import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ROUTES } from '../app_modules/apiRoutes';
import './website.css'; // Import the CSS file
import FeaturesOverview from './FeaturesOverview';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import KeyBenefitsSection from './KeyBenefitsSection';
import FeaturedUseCasesSection from './FeaturedUseCasesSection';
import Modal from './Modal'; // Import the Modal component
import Footer from './Footer';

// Check token and redirect
const checkTokenAndRedirect = async (token, navigate) => {
  try {
    const response = await axios.post(API_ROUTES.sessionCheck, { token });

    if (response.data.exists) {
      navigate('/planner');
    } else {
      console.error('No matching token found.');
    }
  } catch (error) {
    console.error('Error checking token:', error);
  }
};

// DownloadPage Component
const DownloadPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token'); // Replace with actual token retrieval logic
    checkTokenAndRedirect(token, navigate);
  }, [navigate]);

  return (
    <Fragment>
      <div className="App">
        <header className="header">
          <div className="logo">
            <a href="/" style={{textDecoration: 'none'}}>Edusify</a>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
            <a href="#pricing" onClick={() => scrollToSection('plan')}>Pricing</a>
            <a onClick={openModal}>Get Started</a>
          </nav>
          
          <label className="hamburger">
  <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
  <svg viewBox="0 0 32 32">
    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className="line" d="M7 16 27 16"></path>
  </svg>
</label>
        </header>

        <section className="hero">
  <div className="hero-content">
    <h1>Transform Your Study Routine</h1>
    <p>Maximize your productivity and achieve your goals with the ultimate study tool.</p>
    <div className="hero-buttons">
      <button className="cssbuttons-io-button" onClick={openModal}> Get started
  <div className="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
      <a 
         href="#features" onClick={() => scrollToSection('features')}
      >
      <button className="cssbuttons-io-button"> Learn more!
  <div className="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
</a>

    </div>
  </div>
</section>



        <section id="features">
          <FeaturesOverview />
        </section>
        <section id="plan">
          <PricingSection />
        </section>
        <section id="benefit">
          <KeyBenefitsSection />
        </section>

        <section id="cases">
          <FeaturedUseCasesSection />
        </section>
        <section id="footer">
          <Footer />
        </section>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Fragment>
  );
};

export default DownloadPage;
