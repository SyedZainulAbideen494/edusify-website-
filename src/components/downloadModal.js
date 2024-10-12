import React, { useState } from 'react';
import './DownloadModal.css'; // Ensure to create this CSS file
import { FaApple, FaAndroid, FaDownload } from 'react-icons/fa'; // Import icons
import { API_ROUTES } from '../app_modules/apiRoutes';

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
            href={API_ROUTES.downloadAndroid}
            className="btn btn-android"
            download="Edusify.apk"
          >
            <FaAndroid />
          </a>
          <a 
              href={API_ROUTES.downloadIOS}
              className="btn btn-ios"
              download="Edusify.shortcut"
          >
            <FaApple />
          </a>
        </div>
      </div>
    </div>
  );
};


export default DownloadModal;
