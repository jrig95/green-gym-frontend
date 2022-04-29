import classes from "./LandingPage.module.css";
import { useTranslation } from "react-i18next";
import CarouselMain from "../../components/UI/CarouselMain";
import Button from '../../components/UI/Button'
import SignUpForm from "../../components/Forms/SignUpForm";
import Login from "../../components/Forms/LoginForm";
import LoginForm from "../../components/Forms/LoginForm";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        {/* <h1 className={classes.mainTitle}>{t("main_title")}</h1>
        <h1 className={classes.subTitle}>{t("sub_title")}</h1>
        <CarouselMain />
        <div className={classes.buttonsContainer}>
          <Button color="white">Find Out More</Button>
          <Button>Join Green Gym</Button>
        </div> */}
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default LandingPage;
