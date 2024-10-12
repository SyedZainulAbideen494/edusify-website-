import logo from './logo.svg';
import './App.css';
import HeroSection from './components/hero-section';
import FeaturesOverview from './components/FeaturesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CallToActionWithFooter from './components/cta-footer';
import InspirationSection from './components/InspirationSection';
import SuggestionForm from './components/SuggestionForm';

function App() {
  
  return (
    <div className="App">
     <HeroSection/>
     <InspirationSection/>
     <FeaturesOverview/>
     <TestimonialSection/>
     <SuggestionForm/>
     <FAQSection/>
     <CallToActionWithFooter/>
    </div>
  );
}

export default App;
