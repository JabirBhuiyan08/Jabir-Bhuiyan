import { Link } from "react-router-dom";
import five from "../../assets/five.png";
import award from "../../assets/award.jpg";

const Contact = () => {
  return (
    <div className="flex flex-col bg-green-950 mt-5 pb-5">
      <div className="flex sm:flex-col">
        <div className="uppercase sm:flex items-center justify-around mt-20 mb-20">
          <div>
            <h1 className="text-2xl">Got a Project In mind?</h1>
            <h1 className="sm:text-8xl text-green-400">Let's Connect</h1>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to={
                "https://mail.google.com/mail/?view=cm&fs=1&to=jabirbhuiyan08@gmail.com"
              }
              target="_blank"
              className="btn rounded-4xl mt-4 hover:bg-green-600 text-white bg-gray-900 p-5"
            >
              Email
            </Link>
            <Link
              to={"https://wa.link/s9yj6k"}
              target="_blank"
              className="btn rounded-4xl mt-4 hover:bg-green-600 text-white bg-gray-900 p-5"
            >
              WhatsApp
            </Link>
          </div>
        </div>
        <div>
          <img
            src={five}
            alt=""
            className="w-40 md:w-28 mt-40 sm:-mt-38 md:ml-44 relative animation-img1"
          />
        </div>
      </div>

      {/* Award Image Section */}
      <div className="mt-16 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center sm:text-left tracking-tight mb-4">
          An Award From My Client
        </h1>
        <div className="flex justify-center items-center">
          <img
            src={award}
            alt="Award"
            className="w-44 sm:w-56 md:w-64 rounded-lg shadow-2xl border-4 border-white transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
