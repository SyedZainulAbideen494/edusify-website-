import React, { useState, useEffect, useRef } from 'react';
import './InspirationSection.css';

const words = ['knowledge', 'insights', 'skills', 'wisdom']; // List of words to switch between

const InspirationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(words[0]); // Initialize with the first word
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger fade-in effect when in view
        } else {
          setIsVisible(false); // Reset fade-out effect when out of view
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold for triggering

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Effect for switching the last word
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prevWord => {
        const currentIndex = words.indexOf(prevWord);
        return words[(currentIndex + 1) % words.length]; // Get the next word
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div ref={sectionRef} className={`section-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="content">
        <h1>Discover the future of learning</h1>
        <p>
          One platform to cultivate <button className="articles-btn">{currentWord}</button>
        </p>
      </div>
    </div>
  );
};

export default InspirationSection;
