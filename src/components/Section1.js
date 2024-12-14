import React from 'react';
import './Section1.css'; // Ensure you have this CSS file for styles
import img from '../images/laptop_img_lady.png'

const Section1 = () => {
  return (
    <section className="section_1">
      <div className="section_1__container">
        <img 
          src={img}
          alt="Edusify App Showcase"
          className="section_1__image"
        />
      </div>
    </section>
  );
};

export default Section1;
