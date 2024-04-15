import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshing);

  return !isLoggedIn && !isRefreshed ? (
    <Navigate to={redirectTo} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
