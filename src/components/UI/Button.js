import classes from "./Button.module.css";

const Button = ({ children, type, disabled, color }) => {
  let buttonClasses = classes.button

  if (color === 'blue') {
    buttonClasses = `${classes.button} ${classes.blueButton}`
  }

  if (color === 'white') {
    buttonClasses = `${classes.button} ${classes.whiteButton}`
  }

  return (
    <button className={buttonClasses} type={type ? type : 'button'} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
