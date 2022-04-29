import classes from "./SignUpForm.module.css";
import FormCard from "./FormCard";

const SignUpForm = () => {
  return (
    <FormCard title="Sign Up">
      <form>
        <div>
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name"/>
        </div>
      </form>
    </FormCard>
  );
};

export default SignUpForm;
