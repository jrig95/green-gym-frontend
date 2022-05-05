import { Fragment } from "react";

import classes from "./ProgramsPage.module.css";
import ProgramCard from "../../components/Program/ProgramCard";
import Banner from "../../components/Layout/Banner";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p2",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p3",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p4",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p5",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p6",
    title: "Program",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Description of program asdjewfbwef fbewufew weiufbewiubf webfiu asdasdwef w ewfwef  wefew sda.",
  },
  {
    id: "p7",
    title: "Program",
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
  const admin = true;



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
            onDelete={true}
            onUpdate={true}
          />
        </div>
    </div>
    );
  });

  return (
    <Fragment>
      {!admin && <Banner title="Our Programs" />}
      {admin && <AdminBanner searchBar={true} programs={true} />}
      <div className={classes.gridContainer}>
        <div className={classes.programCardGrid}>{programCards}</div>
      </div>
    </Fragment>
  );
};

export default ProgramsPage;
