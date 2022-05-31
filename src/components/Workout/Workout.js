import classes from "./Workout.module.css";
import { Fragment } from "react";

import DailyWorkoutCards from "./DailyWorkoutCards";
import Button from "../UI/Button";
import { useProgram } from "../Program/hooks/use-program";
import { useGetProgramTracker } from "../Trackers/hooks/use-program-tracker";

import WorkoutDayTracker from "./WorkoutDayTracker";

const Workout = ({ userData }) => {
  const programId = userData.programs[0].id;

  // TODO: Add use Program tracker to find the tracker for this program
  const { data: programTrackerData, isLoading: programTrackerIsLoading } =
    useGetProgramTracker(userData.program_trackers[0].id);

  // TODO: Get the Program
  const { data: programData, isLoading: programIsLoading } =
    useProgram(programId);

  if (programIsLoading || programTrackerIsLoading) return <p>Loading...</p>;

  return (
    <Fragment>
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker programTitle={userData.programs[0].program_title} />
      </div>
      <DailyWorkoutCards programTrackerData={programTrackerData} programData={programData} />
    </Fragment>
  );
};

export default Workout;
