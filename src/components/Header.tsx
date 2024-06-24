import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaGlobe, FaTv, FaUsers } from "react-icons/fa";
import Logo from "../library/images/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-600 bg-opacity-75 p-4 text-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <img src={Logo} alt="Logo" className="w-1/3 h-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-4 menu">
          <Link
            to="/"
            className="flex items-center justify-center text-lg text-white"
          >
            <FaHome />
            <span className="ml-2">Home</span>
          </Link>
          <Link
            to="/locations"
            className="flex items-center justify-center text-lg text-white"
          >
            <FaGlobe />
            <span className="ml-2">Locations</span>
          </Link>
          <Link
            to="/episodes"
            className="flex items-center justify-center text-lg text-white"
          >
            <FaTv />
            <span className="ml-2">Episodes</span>
          </Link>
          <Link
            to="/list"
            className="flex items-center justify-center text-lg text-white"
          >
            <FaUsers />
            <span className="ml-2">Characters</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-600 bg-opacity-75">
          <div className="container mx-auto flex flex-col items-center space-y-4 py-4 menu">
            <Link
              to="/"
              className="flex items-center justify-center text-lg text-white"
            >
              <FaHome />
              <span className="ml-2">Home</span>
            </Link>
            <Link
              to="/locations"
              className="flex items-center justify-center text-lg text-white"
            >
              <FaGlobe />
              <span className="ml-2">Locations</span>
            </Link>
            <Link
              to="/episodes"
              className="flex items-center justify-center text-lg text-white"
            >
              <FaTv />
              <span className="ml-2">Episodes</span>
            </Link>
            <Link
              to="/list"
              className="flex items-center justify-center text-lg text-white"
            >
              <FaUsers />
              <span className="ml-2">Characters</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
