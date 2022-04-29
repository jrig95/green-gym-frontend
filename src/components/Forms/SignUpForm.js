import classes from "./Form.module.css";
import FormCard from "./FormCard";
import Button from '../UI/Button';
import useInput from "./Hooks/use-input";

const SignUpForm = () => {
  const textNotEmpty = (value) => value.trim() !== "";

  const {
    value: firstNameValue,
    isValid: firtNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(textNotEmpty);


  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <FormCard title="Sign Up">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="second-name">Second Name</label>
            <input type="text" id="second-name" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">Cancel</Button>
            <Button size="small" type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default SignUpForm;
