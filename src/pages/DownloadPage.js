import React, { useEffect } from 'react';
import { FaAndroid, FaApple, FaArrowAltCircleLeft, FaDesktop } from 'react-icons/fa'; // Import the icons from react-icons/fa
import { Helmet } from 'react-helmet'; // Import Helmet for SEO optimization
import './DownloadPage.css'; // Ensure you have this CSS file for styles
import { Link } from 'react-router-dom';

const DownloadPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component is mounted
  }, []);

  return (
    <div>
      <Link to='/'>
        <button className='download-page-back-btn'>
          <FaArrowAltCircleLeft />
        </button>
      </Link>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Download Edusify</title>
      </Helmet>

      <section className="download__page">
        <div className="download__container">

          {/* Heading */}
          <div className="download__header">
            <h1 className="download__heading">Download Edusify Now</h1>
            <p className="download__subheading">
              Choose your platform and elevate your productivity with Edusify. Manage tasks, notes, flashcards, and more!
            </p>
          </div>

          {/* Download Options */}
          <div className="download__options">
            {/* Android Option */}
            <div className="download__option">
              <a href="https://edusify.vercel.app/android/download" className="download__link" target="_blank" rel="noopener noreferrer">
                <div className="download__card">
                  <FaAndroid size="3em" className="download__icon" /> {/* Android Icon */}
                  <h2 className="download__platform">Download Edusify for Android</h2>
                  <p className="download__description">
                    Access Edusify anytime on your Android device. Fast, reliable, and easy to use. Get organized with tasks, notes, and flashcards.
                  </p>
                  <button className="download__btn">Download Now</button>
                </div>
              </a>
            </div>

            {/* iOS Option */}
            <div className="download__option">
              <a href="https://edusify.vercel.app/ios/instructions/download" className="download__link" target="_blank" rel="noopener noreferrer">
                <div className="download__card">
                  <FaApple size="3em" className="download__icon" /> {/* iOS Icon */}
                  <h2 className="download__platform">Download Edusify for iOS</h2>
                  <p className="download__description">
                    Seamlessly integrate Edusify into your iPhone. Boost your productivity anywhere, anytime, with task management and study tools.
                  </p>
                  <button className="download__btn">Download Now</button>
                </div>
              </a>
            </div>

            {/* Web Option */}
            <div className="download__option">
              <a href="https://edusify.vercel.app/" className="download__link" target="_blank" rel="noopener noreferrer">
                <div className="download__card">
                  <FaDesktop size="3em" className="download__icon" /> {/* Web Icon */}
                  <h2 className="download__platform">Access Edusify on the Web</h2>
                  <p className="download__description">
                    Access Edusify on any browser without needing to install anything. Start managing your tasks, taking notes, and using flashcards now.
                  </p>
                  <button className="download__btn">Go to Web App</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
