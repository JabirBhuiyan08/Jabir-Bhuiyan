import { Link } from "react-router-dom";
import five from "../../assets/five.png";

const Contact = () => {
  return (
    <div className="flex sm:flex-col">
      <div className="uppercase sm:flex items-center justify-around mt-20 mb-20">
        <div>
          <h1 className="text-2xl">Got a Project In mind?</h1>
          <h1 className="sm:text-8xl text-green-400">Let's Connect</h1>
        </div>

        <div>
          <Link
            to={"/contact"}
            className="btn rounded-4xl mt-4 hover:bg-green-600 text-white bg-gray-900 p-5"
          >
           Send me Details
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
  );
};

export default Contact;
