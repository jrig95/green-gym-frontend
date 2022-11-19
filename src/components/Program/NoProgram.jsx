import { Link } from "react-router-dom";
import classes from "./NoProgram.module.css";
import Button from "../UI/Button";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const NoProgram = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className={classes.container}>
        <h1 className={classes.header}>
          {t("no_program_dont_have_a_program")}
        </h1>
        <h2 className={classes.subheader}>
          {t("no_program_get_started")}
        </h2>
        <Link to="/programs">
          <Button>{t("no_program_select_program")}</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default NoProgram;
