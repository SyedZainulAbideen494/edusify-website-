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
            <a href="/">Edusify</a>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
            <a href="#pricing" onClick={() => scrollToSection('plan')}>Pricing</a>
            <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
          </nav>
          
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <h1>Get Started Now!</h1>
            <p>The ultimate study tool for productivity and success.</p>
            <div className="hero-buttons">
              {/* Replace the download buttons with a "Get Started" button */}
              <button
                className="btn-primary"
                onClick={openModal}
              >
                Get Started
              </button>
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
