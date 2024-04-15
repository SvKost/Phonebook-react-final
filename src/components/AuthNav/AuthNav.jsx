import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>

      <NavLink to="/register" end className={buildLinkClass}>
        Registration
      </NavLink>
    </nav>
  );
};

export default AuthNav;
