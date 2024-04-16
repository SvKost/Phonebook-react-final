import css from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button className={css.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
