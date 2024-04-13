import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </div>
  );
};

export default AuthNav;
