import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(login(formData));
  };

  return (
    <div>
      {/* <Helmet> */}
      <title>Login Page</title>
      {/* </Helmet> */}
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
