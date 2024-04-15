import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(login(formData));
  };

  return (
    <div>
      <title>Login Page</title>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
