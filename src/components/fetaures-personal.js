import React from 'react';
import './FeaturesSection.css'; // Import the CSS file

// Import images for the features section
import featureImage1 from '../images/personalised-fetaures-img/1.png';
import featureImage2 from '../images/personalised-fetaures-img/2.png';
import featureImage3 from '../images/personalised-fetaures-img/3.png';
import featureImage4 from '../images/personalised-fetaures-img/4.png';



const FeaturesSectionPersonal = () => {
  return (
    <section className="features-section">
      <div className="features-images">
        <img src={featureImage1} alt="Feature 1" className="feature-image" />
        <img src={featureImage2} alt="Feature 2" className="feature-image" />
        <img src={featureImage3} alt="Feature 3" className="feature-image" />
        <img src={featureImage4} alt="Feature 3" className="feature-image" />
      </div>
    </section>
  );
};

export default FeaturesSectionPersonal;
