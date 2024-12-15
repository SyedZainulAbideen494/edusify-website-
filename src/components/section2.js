import React from 'react';
import './Section1.css'; // Ensure you have this CSS file for styles
import img from '../images/laptop_img_lady.png'
import img2 from '../images/phone-img-mockup.png'

const Section2 = () => {
  return (
    <section className="section_1">
      <div className="section_1__container">
         <img 
          src={img2}
          alt="Edusify App Showcase"
          className="section_1__image"
        />
      </div>
    </section>
  );
};

export default Section2;
