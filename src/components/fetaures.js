import React from 'react';
import './FeaturesSection.css'; // Import the CSS file

// Import images for the features section
import featureImage1 from '../images/fetaures-images/1.png';
import featureImage2 from '../images/fetaures-images/2.png';
import featureImage3 from '../images/fetaures-images/3.png';
import featureImage4 from '../images/fetaures-images/4.png';
import featureImage5 from '../images/fetaures-images/5.png';
import featureImage6 from '../images/fetaures-images/6.png';
import featureImage7 from '../images/fetaures-images/7.png';
import zain from '../images/photo_2_2025-01-07_23-47-34.jpg'


const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Features</h2>
      <div className="features-images">
        <img src={featureImage1} alt="Feature 1" className="feature-image" />
        <img src={featureImage2} alt="Feature 2" className="feature-image" />
        <img src={featureImage3} alt="Feature 3" className="feature-image" />
        <img src={featureImage4} alt="Feature 3" className="feature-image" />
        <img src={featureImage5} alt="Feature 3" className="feature-image" />
        <img src={featureImage6} alt="Feature 3" className="feature-image" />
        <img src={featureImage7} alt="Feature 3" className="feature-image" />
      </div>
    </section>
  );
};

export default FeaturesSection;
