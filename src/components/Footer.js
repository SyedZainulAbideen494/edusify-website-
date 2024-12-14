import React from 'react';
import './Footer.css'; // Ensure you have this CSS file for styles
import logo from '../images/1722866972968-removebg-preview.png'; // Path to the Edusify logo
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing only Instagram and email icons

const Footer = () => {
  return (
    <footer className="footer__page">
      <div className="footer__container">
        {/* Logo Section */}
        <div className="footer__logo">
          <img src={logo} alt="Edusify Logo" className="footer__logo__img" />
        </div>

        {/* Social Media and Contact */}
        <div className="footer__social">
          <a href="https://www.instagram.com/edusify.app/" className="footer__social__link">
            <FaInstagram size={24} />
          </a>
          <a href="mailto:edusify@gmail.com" className="footer__social__link">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Additional Information */}
        <div className="footer__info">
          <p className="footer__info__text">
            Edusify is your all-in-one student productivity app. Simplify your student life and boost your academic performance.
          </p>
          <div className="footer__info__links">
            <a href="https://edusify.vercel.app/terms-and-conditions" className="footer__info__link">Terms & Conditions</a>
            <a href="https://edusify.vercel.app/terms-and-conditions" className="footer__info__link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
