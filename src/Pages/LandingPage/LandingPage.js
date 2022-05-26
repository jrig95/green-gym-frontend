import AuthContext from "../../context/AuthContext";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./LandingPage.module.css";
import { useTranslation } from "react-i18next";
import Background from "../../components/Layout/Background";
import CarouselMain from "../../components/UI/CarouselMain";
import Button from "../../components/UI/Button";

const LandingPage = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);

  return (
    <Background>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>{t("main_title")}</h1>
        <h1 className={classes.subTitle}>{t("sub_title")}</h1>
        <CarouselMain />
        <div className={classes.buttonsContainer}>
          {!authCtx.isLoggedIn && (
            <Fragment>
              <Button color="white">Find Out More</Button>
              <Link to="signup">
                <Button>Join Green Gym</Button>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </Background>
  );
};

export default LandingPage;
