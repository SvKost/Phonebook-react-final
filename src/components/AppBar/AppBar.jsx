import { useSelector } from "react-redux";
import AuthNav from "../../components/AuthNav/AuthNav";
import Navigation from "../../components/Navigation/Navigation";
import UserMenu from "../../components/UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
