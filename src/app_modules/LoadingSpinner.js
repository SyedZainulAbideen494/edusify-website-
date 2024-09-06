// src/components/LoadingSpinner.js

import React from 'react';
import './LoadingSpinner.css'; // Create this CSS file for spinner styles

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
