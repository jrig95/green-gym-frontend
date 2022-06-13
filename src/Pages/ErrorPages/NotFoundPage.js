import { Fragment } from "react";
import Banner from "../../components/Layout/Banner";
import NotFound from "../../components/UI/NotFound";
import { useTranslation } from "react-i18next";


const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Banner title={`${t("not_found_page_title")}`}/>
      <NotFound />
    </Fragment>
  );
};

export default NotFoundPage;
