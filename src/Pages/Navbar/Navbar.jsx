import { useState } from "react";

const Navbar = ({ scrollToHeader, scrollToAbout, scrollToSkills, scrollToService, scrollToPortfolio, scrollToContact }) => {
  return (
    <nav className="bg-gray-900/30 text-white p-4 fixed top-0 left-0 w-full sm:w-28 sm:top-1/2 sm:left-5 sm:transform sm:-translate-y-1/2 shadow-lg rounded-r-lg z-50">
      
      {/* Mobile Menu - Daisy UI Dropdown */}
      <div className="sm:hidden flex justify-between items-center">
        <h1 className="text-lg font-semibold">Menu</h1>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-gray-900 rounded-lg w-48">
            <MenuItem label="Home" action={scrollToHeader} />
            <MenuItem label="About Me" action={scrollToAbout} />
            <MenuItem label="Skills" action={scrollToSkills} />
            <MenuItem label="Services" action={scrollToService} />
            <MenuItem label="Portfolio" action={scrollToPortfolio} />
            <MenuItem label="Contact" action={scrollToContact} />
          </ul>
        </div>
      </div>

      {/* Sidebar for larger screens */}
      <div className="hidden sm:block mt-4 sm:mt-0 ">
        <ul className="flex flex-col gap-3 text-sm">
          <MenuItem label="Home" action={scrollToHeader} />
          <MenuItem label="About Me" action={scrollToAbout} />
          <MenuItem label="Skills" action={scrollToSkills} />
          <MenuItem label="Services" action={scrollToService} />
          <MenuItem label="Portfolio" action={scrollToPortfolio} />
          <MenuItem label="Contact" action={scrollToContact} />
        </ul>
      </div>
    </nav>
  );
};

// Reusable MenuItem Component
const MenuItem = ({ label, action }) => (
  <li>
    <button onClick={action} className="block w-full px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
      {label}
    </button>
  </li>
);

export default Navbar;
