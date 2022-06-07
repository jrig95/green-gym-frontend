import { Link } from "react-router-dom";

import classes from "./Login.module.css";
import LoginForm from "../../components/Forms/LoginForm";
import UserFormPageTemplate from "./UserFormPageTemplate";

const Login = () => {

  const linkStyle = { textDecoration: "none" }

  return (
    <UserFormPageTemplate>
      <div className={classes.loginContainer}>
        <LoginForm />
        <Link to="/signup" style={linkStyle}>
          <h3 className={classes.noAccountMessage}>
            Don't have an account? Create one now.
          </h3>
        </Link>
        <Link to="/forgot-password" style={linkStyle}>
          <h3 className={classes.forgotPassword}>Forgot your password?</h3>
        </Link>
      </div>
    </UserFormPageTemplate>
  );
};

export default Login;
