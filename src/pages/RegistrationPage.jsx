import { useDispatch } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { register } from "../redux/auth/operations";
import { Helmet } from "react-helmet";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const onRegister = (formData) => {
    dispatch(register(formData));
  };

  return (
    <div>
      {/* <Helmet> */}
      <title>Registration Page</title>
      {/* </Helmet> */}
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;
