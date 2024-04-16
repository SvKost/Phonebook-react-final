import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must have at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (userData, formActions) => {
    dispatch(login(userData));
    formActions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field
              className={css.input}
              placeholder="Enter email"
              type="email"
              name="email"
            ></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            Password
            <Field
              className={css.input}
              placeholder="Enter password"
              type="password"
              name="password"
            ></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="password"
              component="span"
            />
          </label>

          <button
            className={css.button}
            type="submit"
            title="Click to sign in"
            aria-label="Sign in"
          >
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
