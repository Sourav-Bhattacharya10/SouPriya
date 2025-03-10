import { useLocation } from "react-router";

import classes from "./SideNavBar.module.css";

export const SideNavBar = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <nav className={classes.SideNav}>
        <a href="#" className={classes.SideNavMenuLinks}>
          About
        </a>
        <a href="#" className={classes.SideNavMenuLinks}>
          Services
        </a>
        <a href="#" className={classes.SideNavMenuLinks}>
          Clients
        </a>
        <a href="#" className={classes.SideNavMenuLinks}>
          Contact
        </a>
      </nav>
    );
  } else {
    return null;
  }
};
