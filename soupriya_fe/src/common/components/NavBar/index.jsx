import { NavLink } from "react-router";

import { ThemeToggle } from "../ThemeToggle";
import spLogo from "../../../assets/SP_Logo.svg";
import classes from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className="topnav">
      <NavLink to="/" className={classes.NavLinkHomeIconBackgroundColor}>
        <img src={spLogo} alt="SP_Logo" width={19} height={17} />
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
