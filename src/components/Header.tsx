import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Rick and Morty
        </Link>
        <Link to="/episodes" className="text-lg">
          Episodes
        </Link>
        <Link to="/list" className="text-lg">
          Characters
        </Link>
      </nav>
    </header>
  );
};

export default Header;
