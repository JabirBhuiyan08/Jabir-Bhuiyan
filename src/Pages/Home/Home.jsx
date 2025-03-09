import { useRef } from "react";
import HeaderSection from "./HeaderSection";
import SubmitEmail from "./SubmitEmail";
import About from "../About";
import Service from "../Services/Service";
import Portfolio from "../Portfolios/Portfolio";
import Contact from "../contact/contact";
import ContactForm from "../contact/ContactForm";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";
import ScrollAnimation from "../testAnimaiton/ScrollAnimation";



const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar
        scrollToHeader={() => scrollToSection(headerRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillRef)}
        scrollToService={() => scrollToSection(serviceRef)}
        scrollToPortfolio={() => scrollToSection(portfolioRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <SubmitEmail />
      
      {/* Wrapped sections inside divs with refs */}
      <div ref={headerRef}>
        <HeaderSection />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <hr className="mt-32" />

      <ScrollAnimation></ScrollAnimation>
      <div ref={skillRef}>
        <Skills />
      </div>

      <div ref={serviceRef}>
        <Service />
      </div>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div >
        <Contact />
      </div>

      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
