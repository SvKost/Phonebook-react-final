import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import Button from "../Button/Button";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <p>
        Welcome, <b>{user.name}</b>
      </p>
      <Button type="button" onClick={() => dispatch(logout())}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
