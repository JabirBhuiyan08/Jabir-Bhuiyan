import { Link } from "react-router-dom";
import two from "../assets/two.png";
import jabir from "../assets/Jabir.jpg";
import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center  px-6 sm:px-16 lg:px-32 mt-10 sm:mt-32 lg:mt-48">
      {/* Left Section (Text) */}
      <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg sm:text-xl max-w-2xl leading-relaxed text-gray-300">
          Hi!{" "}
          <span className="font-semibold text-green-600">Jabir Bhuiyan</span>, a
          passionate web developer dedicated to crafting beautiful,
          high-performance websites. I specialize in creating responsive and
          user-friendly web solutions.
        </p>

        <Link
          className="mt-6 px-6 py-2 inline-flex items-center gap-5 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          to="https://github.com/JabirBhuiyan08?tab=repositories" target="_blank"
        >
          Visit My Portfolios <FaGithub />
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className=" mt-10 sm:mt-0 sm:ml-10 flex justify-center">
        <div>
          
        <img
            src={two}
            alt="Profile"
            className=" w-14 -mb-20 lg:-mb-32 sm:w-44 md:w-52 lg:w-28 animation-img2"
          />
          <img
            src={jabir}
            alt="Profile"
            className=" w-44 sm:w-44 md:w-52 lg:w-80"
          />

        </div>
      </div>
    </div>
  );
};

export default About;
