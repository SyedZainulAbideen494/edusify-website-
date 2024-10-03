import React from 'react';
import './Modal.css';
import { API_ROUTES } from '../app_modules/apiRoutes';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleUseOnWeb = () => {
    // Navigate to the link, potentially opening in an external browser
    window.location.href = "https://edusify.vercel.app/sign-up";
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <div className="card__content___dwonload__get__started__modal">
          <header className="modal-header">
            <h2>Get Started with Edusify</h2>
          </header>
          <div className="modal-body">
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.4' }}>
              <strong>Note:</strong> Once the download is complete, you will need to install the app to start using it.
              For more information, see our <Link to="/download/instructions" style={{ color: '#7161ef', textDecoration: 'underline' }}>instructions</Link>.
            </p>
          </div>

          <div className="modal-buttons">
            {/* Android Download Button */}
            <a
              href={API_ROUTES.downloadAndroid}
              className="btn btn-android"
              download="Edusify.apk"
            >
              <button className="download-btn">
                <svg
                  id="download"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"
                  ></path>
                </svg>
                <span className="download-text">Android</span>
              </button>
            </a>
            <br />
            <span className="divider">or</span>
            <br />

            {/* iOS Download Button */}
            <a
              href={API_ROUTES.downloadIOS}
              className="btn btn-ios"
              download="Edusify.shortcut"
            >
              <button className="download-btn">
                <svg
                  id="download"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"
                  ></path>
                </svg>
                <span className="download-text">IOS</span>
              </button>
            </a>
            <br />

            <span className="divider">or</span>
            <br />
            {/* Use on Web Button */}
            <a 
              href="https://edusify.vercel.app/sign-up" 
              className="btn-shine" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Use on Web
            </a>
          </div>
          <footer className="modal-footer">
            {/* Optional Close Button */}
            {/* <button className="modal-close" onClick={onClose}>x</button> */}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
