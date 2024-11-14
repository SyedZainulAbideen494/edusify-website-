import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation'; // Ensure you have this package installed
import './TestimonialSection.css';
import Modal from './Modal';
import DownloadModal from './downloadModal';

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleGetAppClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Remove the observer after the first intersection
          observer.unobserve(entry.target);
        } else {
          // Reset visibility if the section is not in view
          setIsVisible(false);
          // Re-observe the section when it goes out of view to trigger animations again
          observer.observe(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonial-section" ref={sectionRef}>
            <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Include the Modal */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`testimonial-content fade-in ${isVisible ? 'animate' : ''}`}>
              <h1 className="testimonial-title">Join thousands of students enhancing their studies with our AI tools!</h1>
              <p className="testimonial-description">
                Your all-in-one study app with AI tools and everything students need to learn, stay organized, and succeed.
              </p>
              <div className={`user-stats fade-in-bottom ${isVisible ? 'animate' : ''}`}>
                <img src="https://srv594954.hstgr.cloud/1730470065817.jpg" alt="User 1" className="user-icon fade-in-bottom" />
                <img src="https://srv594954.hstgr.cloud/1729426831109.jpg" alt="User 2" className="user-icon fade-in-bottom" />
                <img src="https://srv594954.hstgr.cloud/1729765657311.png" alt="User 3" className="user-icon fade-in-bottom" />
                <img src="https://srv594954.hstgr.cloud/1728918305105.jpg" alt="User 4" className="user-icon fade-in-bottom" />
                <div className="testimonial-text">
                  <span className="user-text fade-in-bottom">
                    <strong className="big-number">
                      <TypeAnimation
                        sequence={['200,000+', 1000]} // Text to type out
                        wrapper="span"
                        cursor={true}
                        repeat={0} // Set repeat to 0 so it doesn't loop
                        speed={50} // Adjust typing speed (in ms per character)
                        deletionSpeed={50} // Adjust deletion speed if needed
                        style={{ display: 'inline-block' }}
                      />
                    </strong><br />
                    students use Edusify every day!
                  </span>
                </div>
              </div>
              <div className="hero-buttons fade-in-bottom">
                <button className="cssbuttons-io-button" onClick={handleGetAppClick}>
                  Get Started for Free
                  <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
