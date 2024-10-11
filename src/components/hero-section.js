import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import edusifyLogo from '../images/Edusify-removebg-preview.png'; // Make sure to replace this with the actual path to your logo
import Modal from './Modal'; // Import the Modal component

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showCookieNotification, setShowCookieNotification] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const texts = ["learning", "education", "success", "knowledge"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const textRef = useRef(null);
  let index = 0;

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);

    const changeText = () => {
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
      }, 500);
    };

    const intervalId = setInterval(changeText, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleAccept = () => {
    setShowCookieNotification(false);
  };

  const handleGetAppClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section className={`hero__section ${fadeIn ? "fade-in" : ""}`}>
      <header className="hero__header">
        <img src={edusifyLogo} alt="Edusify Logo" className="edusify-logo" />
        <button className="sign__up__button" onClick={handleGetAppClick}>Get App</button>
      </header>

      <div className="hero__content">
        <h1 className="brand__name">Edusify</h1>
        <p className="changing__text">{currentText}</p>
      </div>

      {showCookieNotification && (
        <div className="cookie__notification">
          <p>This website uses cookies.</p>
          <button className="accept__button" onClick={handleAccept}>
            Accept
          </button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Include the Modal */}
    </section>
  );
};

export default HeroSection;
