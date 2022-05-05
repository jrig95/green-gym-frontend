import { Fragment, useState } from "react";

import classes from "./ProgramsPage.module.css";
import ProgramCard from "../../components/Program/ProgramCard";
import Banner from "../../components/Layout/Banner";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import DeleteProgram from "../../components/AdminComponents/Program/DeleteProgram";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Hand Stands",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p2",
    title: "Buff and Beautiful",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p3",
    title: "Run till you die",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p4",
    title: "Sweat and tears",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p5",
    title: "This hurts. Please make it stop",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p6",
    title: "Another Name",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p7",
    title: "Push ups",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p8",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p9",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p10",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p11",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p12",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p13",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
];

const ProgramsPage = () => {
  const [deleteProgramIsShown, setDeleteProgramIsShown] = useState(false);
  const [programDetails, setProgramDetails] = useState({id: 0, title: "Unknown"});
  const admin = true;

  const deleteProgramHandler = () => {
    console.log(`Delete program ${programDetails.title} with ID: ${programDetails.id}`);
    setDeleteProgramIsShown(false);
  };

  const showDeleteProgramHandler = (program) => {
    setDeleteProgramIsShown(true)
    setProgramDetails(program);
  }

  const hideDeleteProgramHandler = () => {
    setDeleteProgramIsShown(false);
  };

  const programCards = DUMMY_DATA.map((program) => {
    return (
      <div>
        <div>
          <ProgramCard
            id={program.id}
            title={program.title}
            image={program.image}
            description={program.description}
            admin={admin}
            onDelete={() => showDeleteProgramHandler(program)}
            onUpdate={true}
            onClose={true}
          />
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      {deleteProgramIsShown && <DeleteProgram program={programDetails} onClose={hideDeleteProgramHandler} onDelete={deleteProgramHandler}/>}
      {!admin && <Banner title="Our Programs" />}
      {admin && <AdminBanner programs={true} />}
      <div className={classes.gridContainer}>
        <div className={classes.programCardGrid}>{programCards}</div>
      </div>
    </Fragment>
  );
};

export default ProgramsPage;
