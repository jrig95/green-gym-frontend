import { Fragment } from "react";

import ProgramCard from "../../components/Program/ProgramCard";
import Banner from "../../components/Layout/Banner";

const ProgramsPage = () => {
  return (
    <Fragment>
      <Banner title="Our Programs" />
      <ProgramCard />
    </Fragment>
  );
};

export default ProgramsPage;
