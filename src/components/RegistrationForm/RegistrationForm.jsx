import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .min(3, "User name must have at least 3 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must have at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ onRegister }) => {
  const handleSubmit = (userData, formActions) => {
    onRegister(userData);
    formActions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field
              className={css.input}
              placeholder="Enter your name"
              type="text"
              name="name"
            ></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>

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
            title="Click to register user"
            aria-label="Register new user"
          >
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
