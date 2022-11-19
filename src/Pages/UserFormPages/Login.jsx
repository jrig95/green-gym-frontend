import { Link } from "react-router-dom";

import classes from "./Login.module.css";
import LoginForm from "../../components/Forms/LoginForm";
import UserFormPageTemplate from "./UserFormPageTemplate";
import { useTranslation } from "react-i18next";


const Login = () => {

  const { t } = useTranslation();
  const linkStyle = { textDecoration: "none" }

  return (
    <UserFormPageTemplate>
      <div className={classes.loginContainer}>
        <LoginForm />
        <Link to="/signup" style={linkStyle}>
          <h3 className={classes.noAccountMessage}>
            {t("log_in_dont_have_an_account")}
          </h3>
        </Link>
        <Link to="/forgot-password" style={linkStyle}>
          <h3 className={classes.forgotPassword}>
           {t("log_in_forgot_your_password")}
          </h3>
        </Link>
      </div>
    </UserFormPageTemplate>
  );
};

export default Login;
