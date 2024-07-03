import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../library/images/logo.png";
import NavMenu from "./components/NavMenu";
import MobileMenu from "./components/MobileMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-600 bg-opacity-75 p-4 text-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold mb-3 md:mb-0">
          <img src={Logo} alt="Logo" className="w-1/3 h-auto" />
        </Link>
        <NavMenu />
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
