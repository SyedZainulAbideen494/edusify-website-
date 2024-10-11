import logo from './logo.svg';
import './App.css';
import HeroSection from './components/hero-section';
import FeaturesOverview from './components/FeaturesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CallToActionWithFooter from './components/cta-footer';

function App() {
  
  return (
    <div className="App">
     <HeroSection/>
     <FeaturesOverview/>
     <TestimonialSection/>
     <FAQSection/>
     <CallToActionWithFooter/>
    </div>
  );
}

export default App;
