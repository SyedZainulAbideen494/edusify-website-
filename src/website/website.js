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

const handleDownloadAndroid = async () => {
  const url = API_ROUTES.downloadAndroid;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  if (!response.ok) {
    console.error('Failed to download Android file');
    return;
  }

  const blob = await response.blob();
  const fileName = 'Edusify.apk'; // Replace with your file name
  const downloadUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
};


const handleDownloadIOS = async () => {
  const url = API_ROUTES.downloadIOS;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  if (!response.ok) {
    console.error('Failed to download iOS file');
    return;
  }

  const blob = await response.blob();
  const fileName = 'Educify.shortcut'; // Replace with your file name
  const downloadUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

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
            <a href="#testimonials" onClick={() => scrollToSection('tesimonial')}>Testimonials</a>
            <a onClick={openModal} style={{ cursor: 'pointer' }}>Get Started for Free</a>
            <Link to='/sign-up'>
              <a className="highlighted" style={{ color: 'white' }}>Sign Up</a>
            </Link>
            <Link to='/login'>
              <a>Login</a>
            </Link>
          </nav>
          
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <h1>Master Your Studies with Edusify</h1>
            <p>The ultimate study tool for productivity and success.</p>
            <div className="hero-buttons">
              <a href="#signup" className="btn-primary" onClick={openModal}>Get Started for Free</a>
              <Link to='/sign-up'>
              <button className="btn-secondary">Sign up</button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features">
          <FeaturesOverview />
        </section>
        <section id="plan">
          <PricingSection />
        </section>
        <section id="benifit">
          <KeyBenefitsSection />
        </section>
        <section id="tesimonial">
          <TestimonialsSection />
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