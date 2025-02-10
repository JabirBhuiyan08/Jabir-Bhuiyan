import { Link } from "react-router-dom";
import two from "../assets/two.png";


const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  px-6 sm:px-16 lg:px-32 mt-10 sm:mt-32 lg:mt-48">
      {/* Left Section (Text) */}
      <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg sm:text-xl max-w-2xl leading-relaxed text-gray-300">
          Hi! <span className="font-semibold text-green-600">Jabir Bhuiyan</span>,
          a passionate web developer dedicated to crafting beautiful, high-performance
          websites. I specialize in creating responsive and user-friendly web solutions.
        </p>

        <Link
          className="mt-6 px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          to="https://www.youtube.com/watch?v=1atlH-OBxbk&ab_channel=Animeoi"
        >
          Visit My Portfolio
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className=" mt-10 sm:mt-0 sm:ml-10 flex justify-center">
        <img
          src={two}
          alt="Profile"
          className=" w-28 sm:w-44 md:w-52 lg:w-64 animation-img2"
        />
      </div>
    </div>
  );
};

export default About;
