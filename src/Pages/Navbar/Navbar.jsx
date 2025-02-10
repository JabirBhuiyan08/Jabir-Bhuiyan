import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 text-white p-4 fixed w-full sm:w-48 sm:fixed top-0 left-0 sm:top-1/2 sm:left-5 sm:transform sm:-translate-y-1/2 shadow-lg rounded-r-lg z-50">
      <div className="py-4">
        <ul className="flex sm:flex-col gap-6 justify-center items-center text-base font-medium">
          <Link to="/" className="block px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Home
          </Link>
          <Link to="/about" className="block px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            About_Me
          </Link>
          <Link to="/contact" className="block px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
