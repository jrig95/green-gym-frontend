import { useQuery } from "react-query";
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
  const [programDetails, setProgramDetails] = useState({
    id: 0,
    title: "Unknown",
  });

  const fetchPrograms = async () => {
    const response = await fetch("http://localhost:3000/api/v1/programs");
    return response.json();
  };

  // Programs data
  const { data, isError, error, isLoading } = useQuery("programs", fetchPrograms);

  console.log(data);

  const admin = true;

  const deleteProgramHandler = () => {
    console.log(
      `Delete program ${programDetails.title} with ID: ${programDetails.id}`
    );
    setDeleteProgramIsShown(false);
  };

  const showDeleteProgramHandler = (program) => {
    setDeleteProgramIsShown(true);
    setProgramDetails(program);
  };

  const hideDeleteProgramHandler = () => {
    setDeleteProgramIsShown(false);
  };

  return (
    <Fragment>
      {deleteProgramIsShown && (
        <DeleteProgram
          program={programDetails}
          onClose={hideDeleteProgramHandler}
          onDelete={deleteProgramHandler}
        />
      )}
      {!admin && <Banner title="Our Programs" />}
      {admin && <AdminBanner programs={true} />}
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error... {error.toString()}</h3>}
      {!isLoading && !isError && (
        <div className={classes.gridContainer}>
          <div className={classes.programCardGrid}>
            {data.map((program) => {
              return (
                <ProgramCard
                  key={program.id}
                  id={program.id}
                  title={program.program_title}
                  image={program.program_cover_image}
                  description={program.program_description}
                  admin={admin}
                  onDelete={() => showDeleteProgramHandler(program)}
                  onUpdate={true}
                  onClose={true}
                />
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProgramsPage;
