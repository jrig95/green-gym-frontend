import AuthContext from "../../context/AuthContext";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./LandingPage.module.css";
import Background from "../../components/Layout/Background";
import CarouselMain from "../../components/UI/CarouselMain";
import Button from "../../components/UI/Button";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);

  return (
    <Background>
      <div className={classes.container}>
        <h1 className={classes.mainTitle}>{t("main_title")} {t("main_title2")}</h1>
        <h1 className={classes.mainTitleMobile}>{t("main_title")}</h1>
        <h1 className={classes.mainTitleMobile2}>{t("main_title2")}</h1>
        <h1 className={classes.subTitle}>{t("sub_title")}</h1>
        <CarouselMain />
        <div className={classes.buttonsContainer}>
          {!authCtx.isLoggedIn && (
            <Fragment>
              <Link to=''>
                <Button color="white">{t("landing_page_find_out_more")}</Button>
              </Link>
              <Link to="signup">
                <Button>{t("landing_page_join_green_gym")}</Button>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </Background>
  );
};

export default LandingPage;
