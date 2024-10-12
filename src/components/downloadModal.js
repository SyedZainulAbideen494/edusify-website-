import React, { useState } from 'react';
import './DownloadModal.css'; // Ensure to create this CSS file
import { FaApple, FaAndroid, FaDownload } from 'react-icons/fa'; // Import icons

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
        <p>Download our app now and start your journey!</p>
        <div className="button-container">
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="download-button android"
            aria-label="Download for Android"
          >
            <FaAndroid />
          </a>
          <a 
            href="https://www.apple.com/app-store/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="download-button ios"
            aria-label="Download for iOS"
          >
            <FaApple />
          </a>
        </div>
      </div>
    </div>
  );
};


export default DownloadModal;
