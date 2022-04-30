import { Fragment } from "react";

import ProgramCard from "../../components/Program/ProgramCard";
import Banner from "../../components/Layout/Banner";

const DUMMY_DATA = {
  program_one: {
    id: "p1",
    title: "Program",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda."
  }
}


const ProgramsPage = () => {
  return (
    <Fragment>
      <Banner title="Our Programs" />
      <ProgramCard id={DUMMY_DATA.program_one.id} title={DUMMY_DATA.program_one.title} image={DUMMY_DATA.program_one.image} description={DUMMY_DATA.program_one.description}/>
    </Fragment>
  );
};

export default ProgramsPage;
