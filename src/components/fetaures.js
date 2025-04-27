import React from 'react';
import './FeaturesSection.css'; // Import the CSS file

import featureImage1 from '../images/fetaures-images/1.png';
import featureImage2 from '../images/fetaures-images/2.png';
import featureImage3 from '../images/fetaures-images/3.png';
import featureImage4 from '../images/fetaures-images/4.png';
import featureImage5 from '../images/fetaures-images/5.png';
import featureImage6 from '../images/fetaures-images/6.png';
import featureImage7 from '../images/fetaures-images/7.png';
import featureImage8 from '../images/fetaures-images/8.png'; // Added 8th image

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Features</h2>
      <div className="features-images">
        <div className="column">
          <img src={featureImage1} alt="Feature 1" className="feature-image" />
          <img src={featureImage2} alt="Feature 2" className="feature-image" />
        </div>
        <div className="column">
          <img src={featureImage3} alt="Feature 3" className="feature-image" />
          <img src={featureImage4} alt="Feature 4" className="feature-image" />
        </div>
        <div className="column">
          <img src={featureImage5} alt="Feature 5" className="feature-image" />
          <img src={featureImage6} alt="Feature 6" className="feature-image" />
        </div>
        <div className="column">
          <img src={featureImage7} alt="Feature 7" className="feature-image" />
          <img src={featureImage8} alt="Feature 8" className="feature-image" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
