import React, { useEffect, useState } from 'react';
import './SuccessMessage.css'; // Import the CSS file for styling

const SuccessMessage = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            const hideTimer = setTimeout(() => {
                console.log('Hiding success message');
                onClose();
            }, 300); // Delay to match the animation duration

            return () => clearTimeout(hideTimer);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    console.log('Rendering SuccessMessage with message:', message);

    return (
        <div className={`success-message-sucess-modal ${!isVisible ? 'hide' : ''}`}>
            {message}
        </div>
    );
};

export default SuccessMessage;
