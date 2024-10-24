import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import edusifyLogo from '../images/Edusify-removebg-preview.png'; // Ensure the correct path to your logo
import Modal from './Modal'; // Import the Modal component
import Loader from "./Loader";
import DownloadModal from "./downloadModal";
import { API_ROUTES } from "../app_modules/apiRoutes";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [showCookieNotification, setShowCookieNotification] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const baseText = "Discover the future of";
  const texts = ["learning with AI", "education at your fingertips", "smart studying", "personalized knowledge", "intelligent growth"];
  
  const [currentText, setCurrentText] = useState(`${baseText} ${texts[0]}`);
  const textRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, 200);

    const changeText = () => {
      setFadeOut(true);
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(`${baseText} ${texts[index]}`);
        setFadeOut(false);
      }, 500);
    };

    const intervalId = setInterval(changeText, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleAccept = () => {
    setShowCookieNotification(false);
  
    // Collect additional data for cookie consent
    const cookieData = {
      cookieConsent: true,
      timestamp: new Date().toISOString(),
      browser: navigator.userAgent, // Collect browser information
      device: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop", // Simple check for device type
      ipAddress: "", // Placeholder for IP address
      referrerUrl: document.referrer || "Direct Visit", // URL of the referrer
    };
  
    // Function to fetch IP address
    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        cookieData.ipAddress = data.ip; // Assign the fetched IP address to cookieData
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };
  
    // Call the fetchIPAddress function and then send the cookie data
    fetchIPAddress().then(() => {
      fetch(API_ROUTES.cookiesCollect, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cookieData),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Cookie data sent successfully');
          } else {
            console.error('Failed to send cookie data');
          }
        })
        .catch((error) => {
          console.error('Error sending cookie data:', error);
        });
    });
  };
  
  const handleGetAppClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setExitAnimation(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setExitAnimation(false);
    }, 1000);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={`hero__section ${fadeIn ? "fade-in" : ""} ${exitAnimation ? "fade-out" : ""}`}>
          <header className="hero__header">
            <img src={edusifyLogo} alt="Edusify Logo" className="edusify-logo" onClick={handleGetAppClick} />
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





          <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
      )}
    </>
  );
};

export default HeroSection;
