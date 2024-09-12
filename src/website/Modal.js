import React from 'react';
import './Modal.css';
import { API_ROUTES } from '../app_modules/apiRoutes';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2>Get Started with Edusify</h2>
        </header>
        <div className="modal-body">
          <p>Select your preferred platform to start using Edusify:</p>
        </div>
        <div className="modal-buttons">
          {/* Android Download Button */}
          <a
            href={API_ROUTES.downloadAndroid}
            className="btn btn-android"
            download="Edusify.apk"
          >
            Download for Android
          </a>

          <span className="divider">or</span>

          {/* iOS Download Button */}
          <a
            href={API_ROUTES.downloadIOS}
            className="btn btn-ios"
            download="Edusify.shortcut"
          >
            Download for iOS
          </a>

          <span className="divider">or</span>

          {/* Use on Web Button */}
          <a
            href='https://edusify.vercel.app/sign-up'
            className="btn btn-web"
          >
            Use on Web
          </a>
        </div>
        <footer className="modal-footer">
          <button className="modal-close" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
