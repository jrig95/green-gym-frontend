import Card from "./Card";
import classes from "./NotFound.module.css";
import { useTranslation } from "react-i18next";


const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h1>404</h1>
        {/* <h2>page not found</h2> */}
        <h2>{t("not_found_page_not_found")}</h2>
      </Card>
    </div>
  );
};

export default NotFound;
