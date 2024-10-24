import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './components/hero-section';
import FeaturesOverview from './components/FeaturesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CallToActionWithFooter from './components/cta-footer';
import InspirationSection from './components/InspirationSection';
import SuggestionForm from './components/SuggestionForm';

function App() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Check if the user is in an in-app browser (like Instagram)
    const checkInAppBrowser = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      // Instagram's in-app browser detection
      if (ua.includes("Instagram")) {
        setIsInAppBrowser(true);
      }
    };

    checkInAppBrowser();

    // Listen for the PWA install prompt
    const beforeInstallPromptHandler = (e) => {
      e.preventDefault(); // Prevent the automatic prompt
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    }
  };

  const handleOpenInBrowser = () => {
    const newWindow = window.open('https://edusify-download.vercel.app', '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  useEffect(() => {
    const checkInAppBrowser = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      if (ua.includes("Instagram")) {
        setIsInAppBrowser(true);
      }
    };

    checkInAppBrowser();
  }, []);

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  };

  const modalContentStyle = {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    maxWidth: '400px',
    textAlign: 'center',
    color: '#ffffff',
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ffffff', // Changed to white
    color: '#007BFF', // Set text color to a blue shade for contrast
    borderRadius: '20px', // Increased border radius for a curvier look
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
    border: '2px solid #007BFF', // Optional: add a border to define the button
};

const linkHoverStyle = {
    backgroundColor: '#007BFF', // Change background to blue on hover
    color: '#ffffff', // Change text color to white on hover
    transform: 'scale(1.05)',
};


  if (isInAppBrowser) {
    return (
      <div style={modalStyle}>
        <div style={modalContentStyle}>
          <h2>Notice</h2>
          <p>
            The Instagram in-app browser doesn't support downloads. To download the app, please use your default browser.
          </p>
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(window.location.href)
                .then(() => {
                  alert('Link copied! You can now paste it in your browser.');
                })
                .catch(err => console.error('Failed to copy link: ', err));
            }}
            style={linkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
              e.currentTarget.style.transform = linkHoverStyle.transform;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = linkStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Open in Browser
          </a>
          <p style={{ marginTop: '15px' }}>or copy this link: <strong>{window.location.href}</strong></p>
        </div>
      </div>
    );
  }


  
  // Otherwise, show the full app content
  return (
    <div className="App">
      <HeroSection />
      <InspirationSection />
      <FeaturesOverview />
      <TestimonialSection />
      <SuggestionForm />
      <FAQSection />
      <CallToActionWithFooter />
    </div>
  );
}
const buttonStyleAHref = {
  display: 'inline-block',
  backgroundColor: 'white', // White background
  color: '#333', // Dark text for contrast
  padding: '10px 20px', // Padding for a button-like appearance
  borderRadius: '20px', // Curved edges
  textDecoration: 'none', // Remove underline from the link
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
  fontSize: '16px', // Font size
  transition: 'background-color 0.3s, transform 0.2s', // Smooth hover 
  marginTop: '20px'
};

// Button styles
const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  marginTop: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Modal styles
const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for the modal
};

// Modal content styles
const modalContentStyle = {
  backgroundColor: '#1E1E1E', // Dark background for the content
  color: 'white', // White text for better contrast
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
};


export default App;
