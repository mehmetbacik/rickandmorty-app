import React from "react";
import { FaHome, FaGlobe, FaTv, FaUsers } from "react-icons/fa";
import NavItem from "./NavItem";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-gray-600 bg-opacity-75">
      <div className="container mx-auto flex flex-col items-center space-y-4 py-4 menu">
        <NavItem to="/" icon={FaHome} label="Home" />
        <NavItem to="/locations" icon={FaGlobe} label="Locations" />
        <NavItem to="/episodes" icon={FaTv} label="Episodes" />
        <NavItem to="/list" icon={FaUsers} label="Characters" />
      </div>
    </div>
  );
};

export default MobileMenu;
