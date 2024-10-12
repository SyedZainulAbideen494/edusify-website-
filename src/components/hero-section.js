import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import edusifyLogo from '../images/Edusify-removebg-preview.png'; // Ensure the correct path to your logo
import Modal from './Modal'; // Import the Modal component
import Loader from "./Loader";
import DownloadModal from "./downloadModal";

const HeroSection = () => {
  const [loading, setLoading] = useState(true); // State for loading
  const [fadeIn, setFadeIn] = useState(false);
  const [showCookieNotification, setShowCookieNotification] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [exitAnimation, setExitAnimation] = useState(false); // State for exit animation
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out of text

  const baseText = "Discover the future of"; // Base text
  const texts = ["learning with AI", "education at your fingertips", "smart studying", "personalized knowledge", "intelligent growth"];
  
  const [currentText, setCurrentText] = useState(`${baseText} ${texts[0]}`); // Initialize with the first word
  const textRef = useRef(null);
  let index = 0;

  useEffect(() => {
    // Show loader for 1 second
    const loadingTimer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 3000);

    // Start fade-in effect after loader
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, 200);

    // Function to change the text every 2 seconds
    const changeText = () => {
      setFadeOut(true); // Trigger fade-out
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(`${baseText} ${texts[index]}`); // Change the last word only
        setFadeOut(false); // Reset fade-out after setting new text
      }, 500); // Duration of fade-out
    };

    const intervalId = setInterval(changeText, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      clearTimeout(loadingTimer); // Cleanup loading timer
    };
  }, []);

  const handleAccept = () => {
    setShowCookieNotification(false);
  };

  const handleGetAppClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setExitAnimation(true); // Trigger exit animation
    setTimeout(() => {
      setIsModalOpen(false); // Close the modal after exit animation
      setExitAnimation(false); // Reset exit animation state
    }, 1000); // Match this duration with your fade-out CSS transition duration
  };

  return (
    <>
      {loading ? (
        <Loader/> // Loading message
      ) : (
        <section className={`hero__section ${fadeIn ? "fade-in" : ""} ${exitAnimation ? "fade-out" : ""}`}>
          <header className="hero__header">
            <img src={edusifyLogo} alt="Edusify Logo" className="edusify-logo" />
            <button className="sign__up__button" onClick={handleGetAppClick}>Get App</button>
          </header>

          <div className="hero__content">
            <h1 className="brand__name">Edusify</h1>
            <p className="changing__text">
              <span className={`text-container ${fadeOut ? "fade-out-text" : "fade-in-text"}`}>
                {currentText}
              </span>
            </p>
          </div>

      
          <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Include the Modal */}
        </section>
      )}
    </>
  );
};

export default HeroSection;
