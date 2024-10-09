import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './students-testimonials.css';
import Modal from './Modal';

const TestimonialHero = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    const scrollToSection = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <section className="hero-section__testimonial__hero__section">
      <div className="container__testimonial__hero__section">
        <div className="row__testimonial__hero__section">
          <div className="col-12__testimonial__hero__section">
            <div className="hero-content__testimonial__hero__section">
              <h1 className="hero-title__testimonial__hero__section">Transform Your Study Routine</h1>
              <p className="hero-description__testimonial__hero__section">Your all-in-one study app with AI tools and everything students need to learn, stay organized, and succeed.</p>
              <div className="user-stats__testimonial__hero__section">
                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/460953738_2007858242965734_3101439078776234228_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=fk2uBmF9QlEQ7kNvgG2Btve&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYC9E2PYHezvsQbYUM3xNF9UGCpxtNhdkA2gNHTMUxX_CQ&oe=670B0E02" alt="User 1" className="user-icon__testimonial__hero__section" />
                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/459309825_897228809068380_4178068191224473134_n.jpg?stp=dst-jpg_s160x160&_nc_cat=107&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=nb5tics5Xa0Q7kNvgG0ZLm9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYB0cGVLmY7AJb01UJA4jkzS0JV7oVOku0lIuAlBOrXHBg&oe=670B1011" alt="User 2" className="user-icon__testimonial__hero__section" />
                <img src="https://scontent.cdninstagram.com/v/t51.2885-19/455111674_763869582401648_8273212478874053196_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=meLVBqAeb2wQ7kNvgHX6DDo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYAiNYQldJiZveyCHaCQ0zJk6eUIg2PQ2REBZpBOc8dKlg&oe=670AEDC8" alt="User 3" className="user-icon__testimonial__hero__section" />
                <img src="https://dropment.online/1728283961885.jpg" alt="User 4" className="user-icon__testimonial__hero__section" />
                <div className="testimonial__hero__section__testimonial-text">
        <span className="user-text__testimonial__hero__section">
          <strong className="big-number">150,000+</strong><br/> students use Edusify
        </span>
      </div>
              </div>
              <div className="hero-buttons">
      <button className="cssbuttons-io-button" onClick={openModal}>Get started
        <div className="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
          </svg>
        </div>
      </button>
    </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default TestimonialHero;
