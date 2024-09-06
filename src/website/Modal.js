import React from 'react';
import './Modal.css';
import { API_ROUTES } from '../app_modules/apiRoutes';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadAndroid = async () => {
    const url = API_ROUTES.downloadAndroid;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    });
  
    if (!response.ok) {
      console.error('Failed to download Android file');
      return;
    }
  
    const blob = await response.blob();
    const fileName = 'Edusify.apk'; // Replace with your file name
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  
  
  const handleDownloadIOS = async () => {
    const url = API_ROUTES.downloadIOS;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    });
  
    if (!response.ok) {
      console.error('Failed to download iOS file');
      return;
    }
  
    const blob = await response.blob();
    const fileName = 'Educify.shortcut'; // Replace with your file name
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  

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
          <button className="btn-android" onClick={handleDownloadAndroid}>Download for Android</button>
          <span className="divider">or</span>
          <button className="btn-android" onClick={handleDownloadIOS}>Download for IOS</button>
          <span className="divider">or</span>
          <a href='/sign-up' className="btn-web">Use on Web</a>
        </div>
        <footer className="modal-footer-website">
          <button className="modal-close-website" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
