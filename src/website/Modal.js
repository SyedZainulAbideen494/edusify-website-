import React from 'react';
import './Modal.css';
import { API_ROUTES } from '../app_modules/apiRoutes';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-website" onClick={onClose}>
      <div className="modal-content-website" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header-website">
          <h2>Get Started with Edusify</h2>
        </header>
        <div className="modal-body-website">
          <p>Select your preferred platform to start using Edusify:</p>
        </div>
        <div className="modal-buttons-website">
          {/* Android Download Button */}
          <a
            href={API_ROUTES.downloadAndroid}
            className="btn-android"
            download="Edusify.apk"
          >
            Download for Android
          </a>

          <span className="divider">or</span>

          {/* iOS Download Button */}
          <a
            href={API_ROUTES.downloadIOS}
            className="btn-android"
            download="Educify.shortcut"
          >
            Download for iOS
          </a>

          <span className="divider">or</span>

          {/* Use on Web Button */}
          <a
            href='https://edusify.vercel.app/sign-up'
            className="btn-web"
          >
            Use on Web
          </a>
        </div>
        <footer className="modal-footer-website">
          <button className="modal-close-website" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
