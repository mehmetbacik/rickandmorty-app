import React from "react";
import { FaHome, FaGlobe, FaTv, FaUsers } from "react-icons/fa";
import NavItem from "./NavItem";

const NavMenu: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-4 menu">
      <NavItem to="/" icon={FaHome} label="Home" />
      <NavItem to="/locations" icon={FaGlobe} label="Locations" />
      <NavItem to="/episodes" icon={FaTv} label="Episodes" />
      <NavItem to="/list" icon={FaUsers} label="Characters" />
    </div>
  );
};

export default NavMenu;
