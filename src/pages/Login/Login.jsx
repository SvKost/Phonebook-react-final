import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = (formData) => {
    dispatch(login(formData));
  };

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
