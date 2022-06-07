import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import SignUpForm from "../../components/Forms/SignUpForm";
import UserFormPageTemplate from "./UserFormPageTemplate";

const SignUp = () => {
  return (
    <UserFormPageTemplate>
      <div className={classes.signUpContrainer}>
        <SignUpForm />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h3 className={classes.haveAccountMessage}>
            Already have an account? Log in.
          </h3>
        </Link>
      </div>
    </UserFormPageTemplate>
  );
};

export default SignUp;
