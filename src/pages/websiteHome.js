import HeaderSection from '../components/HeaderSection';
import FeaturesSection from '../components/fetaures';
import CtaSection1 from '../components/cta-section-1';
import CtaSection2 from '../components/CtaSection2';
import CtaSection3 from '../components/CtaSection3';
import HowToStayOrganized from '../components/HowToStayOrganized';
import HowToStudy from '../components/HowToStudy';
import CtaSection4 from '../components/CtaSection4';
import CtaSection5 from '../components/CtaSection5';
import CtaSection6 from '../components/CtaSection6';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FaqSection from '../components/faqSections';
import Section1 from '../components/Section1';
import Testimonials from '../components/Testimonials';
import FeaturesSectionPersonal from '../components/fetaures-personal';
import CtaSection7 from '../components/CtaSection7';
import Section3 from '../components/Section3';
import AiDemoSection from '../components/AiDemoSection';
import PomodoroTimer from '../components/PomodoroTimer';


function HomeWebApp() {
  return (
    <div className="App">
      <HeaderSection/>
      <FeaturesSection/>
      <Section3/>
      <CtaSection1/>
      <AiDemoSection/>
      <HowToStayOrganized/>
      <CtaSection2/>
      <CtaSection7/>
      <PomodoroTimer/>
      <HowToStudy/>
      <CtaSection3/>
      <CtaSection5/>
      <CtaSection4/>
      <Section1/>
      <CtaSection6/>
      <FeaturesSectionPersonal/>
      <Testimonials/>
          <FaqSection/>
  
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default HomeWebApp;
