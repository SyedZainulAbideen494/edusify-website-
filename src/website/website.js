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
import FAQ from './FAQ';
import { TypeAnimation } from 'react-type-animation';
import TestimonialHero from './students-testimonials';

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
            <a href="/" style={{ textDecoration: 'none' }}>Edusify</a>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
            <a href="#pricing" onClick={() => scrollToSection('plan')}>Pricing</a>
            <a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
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

        <section >
    <TestimonialHero/>
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
        <section id='faq'>
          <FAQ/>
        </section>
        <section id="cases">
          <FeaturedUseCasesSection onStartJourney={openModal} /> {/* Pass the openModal function as a prop */}
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
