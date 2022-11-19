import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import SignUpForm from "../../components/Forms/SignUpForm";
import UserFormPageTemplate from "./UserFormPageTemplate";
import { useTranslation } from "react-i18next";


const SignUp = () => {
  const { t } = useTranslation();
  return (
    <UserFormPageTemplate>
      <div className={classes.signUpContrainer}>
        <SignUpForm />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h3 className={classes.haveAccountMessage}>
            {t("sign_up_already_have_an_account")}
          </h3>
        </Link>
      </div>
    </UserFormPageTemplate>
  );
};

export default SignUp;
