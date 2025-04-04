import { useRef } from "react";
import HeaderSection from "./HeaderSection";
import SubmitEmail from "./SubmitEmail";
import About from "../About";
import Service from "../Services/Service";
import Contact from "../contact/contact";
import ContactForm from "../contact/ContactForm";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";
import ScrollAnimation from "../testAnimaiton/ScrollAnimation";
import Portfolio from "../Portfolios/Portfolios";

const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
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

      <div ref={headerRef}>
        <HeaderSection />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <hr className="mt-32" />

      <ScrollAnimation />

      <div ref={skillRef}>
        <Skills />
      </div>

      <div ref={serviceRef}>
        <Service />
      </div>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div ref={contactRef}>
        <Contact />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
