import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderSection from "../components/HeaderSection";
import FeaturesSection from "../components/fetaures";
import CtaSection1 from "../components/cta-section-1";
import CtaSection2 from "../components/CtaSection2";
import CtaSection3 from "../components/CtaSection3";
import HowToStayOrganized from "../components/HowToStayOrganized";
import HowToStudy from "../components/HowToStudy";
import CtaSection4 from "../components/CtaSection4";
import CtaSection5 from "../components/CtaSection5";
import CtaSection6 from "../components/CtaSection6";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import FaqSection from "../components/faqSections";
import Section1 from "../components/Section1";
import Testimonials from "../components/Testimonials";
import FeaturesSectionPersonal from "../components/fetaures-personal";
import CtaSection7 from "../components/CtaSection7";
import Section3 from "../components/Section3";
import AiDemoSection from "../components/AiDemoSection";
import PomodoroTimer from "../components/PomodoroTimer";

function HomeWebApp() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const downloadRef = useRef(null); // Reference for the download link

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/.test(userAgent);
    const isFacebook = /FBAN|FBAV/.test(userAgent);

    setCurrentUrl(window.location.href);

    if (isInstagram || isFacebook) {
      setIsInAppBrowser(true);

      // Automatically trigger file download before redirecting
      setTimeout(() => {
        const downloadLink = document.createElement("a");
        downloadLink.href = window.location.href;
        downloadLink.setAttribute("download", "Edusify.html"); // Set actual filename
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }, 500);

      // Redirect user to the default browser after a delay
      setTimeout(() => {
        window.location.replace(window.location.href);
      }, 1500);
    }
  }, []);

  if (isInAppBrowser) {
    return (
      <div style={{ textAlign: "center", padding: "20px", background: "#ffcccb" }}>
        <p>Redirecting you to your default browser...</p>
        {/* Downloadable Link */}
        <a
          ref={downloadRef}
          href={currentUrl}
          download="Edusify.html"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 15px",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Download Link
        </a>
      </div>
    );
  }

  return (
    <div className="App">
      <Helmet>
        <title>Edusify - All-in-One App for Students</title>
      </Helmet>

      <HeaderSection />
      <FeaturesSection />
      <Section3 />
      <CtaSection1 />
      <AiDemoSection />
      <HowToStayOrganized />
      <CtaSection2 />
      <CtaSection7 />
      <PomodoroTimer />
      <HowToStudy />
      <CtaSection3 />
      <CtaSection5 />
      <CtaSection4 />
      <Section1 />
      <CtaSection6 />
      <FeaturesSectionPersonal />
      <Testimonials />
      <FaqSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default HomeWebApp;
