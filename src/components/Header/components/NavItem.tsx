import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface NavItemProps {
  to: string;
  icon: IconType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center text-lg text-white"
    >
      <Icon />
      <span className="ml-2">{label}</span>
    </Link>
  );
};

export default NavItem;
