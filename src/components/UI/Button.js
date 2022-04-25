import classes from "./Button.module.css";

const Button = ({ children, type, disabled, color, size }) => {
  let buttonClasses = `${classes.button}`;

  if (size === "small") {
    buttonClasses += ` ${classes.buttonSmall}`;
  }

  if (color === "blue") {
    buttonClasses += ` ${classes.buttonBlue}`;
  }

  if (color === "white") {
    buttonClasses += ` ${classes.buttonWhite}`;
  }

  return (
    <button
      className={buttonClasses}
      type={type ? type : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
