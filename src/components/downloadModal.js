import React from 'react';
import './DownloadModal.css'; // Update this CSS file accordingly
import { FaApple, FaAndroid, FaDownload, FaGlobe } from 'react-icons/fa';
import { API_ROUTES } from '../app_modules/apiRoutes';
import { FaWebAwesome } from 'react-icons/fa6';

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>✖</button>
        
        {/* Header Section */}
        <div className="modal-header">
          <FaDownload className="download-icon" />
          <h2>Download Edusify</h2>
        </div>
        
        {/* Subtext for clarity */}
        <p className="modal-description">Get Edusify on your preferred platform.</p>
        
        {/* Download Buttons */}
        <div className="button-container">
          <a
            href='https://edusify.vercel.app/android/download'
            className="download-button android"
            download="Edusify.apk"
          >
            <FaAndroid /> <span className="button-text">Android</span>
          </a>

          <a
            href="https://edusify.vercel.app/ios/instructions/download"
            className="download-button ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple /> <span className="button-text">iOS</span>
          </a>

          <a
            href="https://edusify.vercel.app/"
            className="download-button ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe /> <span className="button-text">Web</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;

