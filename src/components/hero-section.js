import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import edusifyLogo from '../images/Edusify-removebg-preview.png';
import Modal from './Modal';
import Loader from "./Loader";
import DownloadModal from "./downloadModal";
import { API_ROUTES } from "../app_modules/apiRoutes";
import { Link } from "react-router-dom"; // Ensure you have React Router installed for Link

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [showCookieNotification, setShowCookieNotification] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false); // New state for burger menu

  const baseText = "Discover the future of";
  const texts = ["learning with AI", "education at your fingertips", "smart studying", "personalized knowledge", "intelligent growth"];
  
  const [currentText, setCurrentText] = useState(`${baseText} ${texts[0]}`);
  const textRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 500);

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
  
    const cookieData = {
      cookieConsent: true,
      timestamp: new Date().toISOString(),
      browser: navigator.userAgent,
      device: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
      ipAddress: "",
      referrerUrl: document.referrer || "Direct Visit",
    };
  
    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        cookieData.ipAddress = data.ip;
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };
  
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

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen); // Toggle burger menu visibility
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={`hero__section ${fadeIn ? "fade-in" : ""} ${exitAnimation ? "fade-out" : ""}`}>
                  <header className="hero__header">
            {/* Burger Icon */}
            <div className="burger-menu" onClick={toggleBurgerMenu}>
              <div className={`burger-line ${isBurgerMenuOpen ? "open" : ""}`}></div>
              <div className={`burger-line ${isBurgerMenuOpen ? "open" : ""}`}></div>
              <div className={`burger-line ${isBurgerMenuOpen ? "open" : ""}`}></div>
            </div>

            {/* Burger Menu Links */}
            <div className={`burger-links ${isBurgerMenuOpen ? "open" : ""}`}>
  <ul>
    <li><Link to="/about-us" style={{textDecoration:'none', color: 'white'}}>About us</Link></li>
    <li><Link to="/features" style={{textDecoration:'none', color: 'white'}}>Features</Link></li>
    <li onClick={handleGetAppClick}>Android</li>
    <li onClick={handleGetAppClick}>IOS</li>
  </ul>
</div>
            <button type="button" className="btn" onClick={handleGetAppClick}>
      <strong>Get App</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
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
