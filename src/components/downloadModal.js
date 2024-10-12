import React from 'react';
import './DownloadModal.css'; // Ensure to create this CSS file
import { FaApple, FaAndroid, FaDownload, FaGlobe } from 'react-icons/fa'; // Import FaGlobe for web icon
import { API_ROUTES } from '../app_modules/apiRoutes';
import { Link } from 'react-router-dom';

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="modal-header">
          <FaDownload className="download-icon" />
          <h2>Get the App</h2>
        </div>
        <p>Download our app or use the web version to start your journey!</p>
        <div className="button-container">
          <a 
            href={API_ROUTES.downloadAndroid}
            className="download-button android"
            download="Edusify.apk"
          >
            <FaAndroid />
          </a>
          <Link
            href="https://edusify.vercel.app/ios/instructions/download" // Link to your iOS instructions page here
            className="download-button ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple />
          </Link>
          <a 
            href={API_ROUTES.webApp} // Add your web app route here
            className="download-button web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
