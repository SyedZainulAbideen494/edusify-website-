import React from 'react';
import './SuccessModal.css'; // Add your CSS styles here

const SuccessModal = ({ visible, message }) => {
    if (!visible) return null;

    console.log("Modal is visible with message:", message); // Debugging line

    return (
        <div className="success-modal">
            <div className="success-modal-content">
                <div className="circle-container">
                    <div className="circle">
                        <svg className="tick-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9 16.172l-4.95-4.95L3.636 10l5.364 5.364L20.364 5.636 22 7.272l-12 12z"/>
                        </svg>
                    </div>
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default SuccessModal;