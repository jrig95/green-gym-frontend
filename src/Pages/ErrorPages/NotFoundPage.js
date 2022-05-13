import { Fragment } from "react";
import Banner from "../../components/Layout/Banner";
import NotFound from "../../components/UI/NotFound";

const NotFoundPage = () => {
  return (
    <Fragment>
      <Banner title="Oh no..."/>
      <NotFound />
    </Fragment>
  );
};

export default NotFoundPage;
