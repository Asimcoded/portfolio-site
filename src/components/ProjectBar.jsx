import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectBar() {
  return (
    <nav className="md:flex flex-col hidden md:w-auto items-center px-4 py-10 gap-10 bg-primary/5 text-text-light rounded-lg shadow-lg backdrop-blur-md">
      {[1, 2, 3, 4].map((id) => (
        <NavLink
          key={id}
          to={`/project/${id}`}
          className={({ isActive }) =>
            `text-xl px-4 transition-colors duration-300 ${
              isActive ? "text-primary" : "text-text-light hover:text-primary"
            }`
          }
        >
          {id}
        </NavLink>
      ))}
    </nav>
  );
}
