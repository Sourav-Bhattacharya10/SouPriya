import { NavLink } from "react-router";

import { ThemeToggle } from "../ThemeToggle";

export const NavBar = () => {
  return (
    <nav className="topnav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="sourav"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Sourav
      </NavLink>
      <NavLink
        to="priya"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Priya
      </NavLink>
      <ThemeToggle />
    </nav>
  );
};
