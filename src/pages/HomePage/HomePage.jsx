import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <title>Home Page</title>
      <h3>You are in the Contact organiser.</h3>
      {!isLoggedIn && (
        <p>
          To see and add contacts, please{" "}
          <Link to="/login">
            <b>Log in</b>
          </Link>{" "}
          or{" "}
          <Link to="/register">
            <b>Register</b>
          </Link>
          !
        </p>
      )}
    </div>
  );
};

export default HomePage;
