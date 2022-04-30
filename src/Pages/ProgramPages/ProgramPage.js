import classes from "./ProgramPage.module.css";
import Banner from "../../components/Layout/Banner";
import { Fragment } from "react";

import ExerciseCard from "../../components/Exercise/ExerciseCard";

const DUMMY_EXERCISES = [
  {
    id: 'e1',
    name: "Push up",
    work: '45 secs',
    rest: "15 secs"
  },
  {
    id: 'e2',
    name: "Burpee",
    work: '30 secs',
    rest: "15 secs"
  },
  {
    id: 'e3',
    name: "Sit up",
    work: '50 secs',
    rest: "15 secs"
  },
]

const ProgramPage = () => {
  return (
    <Fragment>
      <Banner title="Program Title" />
      <div className={classes.exerciseCardContainer}>
        <ExerciseCard />
      </div>
    </Fragment>
  );
};

export default ProgramPage;
