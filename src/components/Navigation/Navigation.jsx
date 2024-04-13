import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import clsx from "clsx";
import UserMenu from "../UserMenu/UserMenu";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <div>
      {/* {isLoggedIn && ( */}
      <div className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navigation;
