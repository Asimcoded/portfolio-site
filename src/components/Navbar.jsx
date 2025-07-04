import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icons } from "../Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:static fixed w-full md:w-auto items-center px-4 py-4 md:py-10 gap-4 bg-primary/5 text-text-light rounded-lg shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between w-full">
        <Link to="/">
          <img
            src="https://placehold.co/100x100/png"
            alt="logo"
            className="rounded-full h-12"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>
      <ul
        className={`flex flex-col items-center gap-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:gap-6 md:mt-0`}
      >
        <li className="relative group">
          <NavLink
            to="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            {({ isActive }) => (
              <img
                src={isActive ? Icons.home.active : Icons.home.inactive}
                alt={isActive ? "Active Home" : "Inactive Home"}
                className="h-10"
              />
            )}
          </NavLink>
          <div className="absolute top-2 left-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-12 bg-primary text-background text-xs py-1 px-2 rounded whitespace-nowrap md:block hidden">
            Home
          </div>
        </li>
        <li className="relative group">
          <NavLink
            to="/about"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            {({ isActive }) => (
              <img
                src={isActive ? Icons.about.active : Icons.about.inactive}
                alt={isActive ? "Active About" : "Inactive About"}
                className="h-8"
              />
            )}
          </NavLink>
          <div className="absolute top-2 left-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-12 bg-primary text-background text-xs py-1 px-2 rounded whitespace-nowrap md:block hidden">
            About
          </div>
        </li>
        <li className="relative group">
          <NavLink
            to="/project/1"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            {({ isActive }) => (
              <img
                src={isActive ? Icons.project.active : Icons.project.inactive}
                alt={isActive ? "Active Project" : "Inactive Project"}
                className="h-8"
              />
            )}
          </NavLink>
          <div className="absolute top-2 left-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-12 bg-primary text-background text-xs py-1 px-2 rounded whitespace-nowrap md:block hidden">
            Project
          </div>
        </li>
        <li className="relative group">
          <NavLink
            to="/contact"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            {({ isActive }) => (
              <img
                src={isActive ? Icons.contact.active : Icons.contact.inactive}
                alt={isActive ? "Active Contact" : "Inactive Contact"}
                className="h-8"
              />
            )}
          </NavLink>
          <div className="absolute top-2 left-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-12 bg-primary text-background text-xs py-1 px-2 rounded whitespace-nowrap md:block hidden">
            Contact
          </div>
        </li>
      </ul>
    </nav>
  );
}