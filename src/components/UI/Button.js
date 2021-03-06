import classes from "./Button.module.css";

const Button = ({ children, type, disabled, color, size, onClick, className }) => {
  let buttonClasses = `${classes.button}`;

  if (className) {
    buttonClasses = `${classes.button} ${className}`;
  }

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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
