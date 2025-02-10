
import HeaderSection from "./HeaderSection";
import About from "../About";
import Service from "../Services/Service";
import Portfolio from "../Portfolios/Portfolio";
import Contact from "../contact/contact";

const Home = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
     
      <About></About>
      <hr  className="mt-32"/>
      <Service></Service>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
