import React from 'react';
import './404Page.css'; // Import the CSS file

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found.</p>
        <p className="not-found-description">The page you are looking for does not exist.</p>
        <a href="/" className="not-found-link">Go to Homepage</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
