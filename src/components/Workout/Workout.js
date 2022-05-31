import classes from "./Workout.module.css";
import { Fragment } from "react";

import DailyWorkoutCards from "./DailyWorkoutCards";
import { useProgram } from "../Program/hooks/use-program";
import { useGetProgramTracker } from "../Trackers/hooks/use-program-tracker";

import WorkoutDayTracker from "./WorkoutDayTracker";

const Workout = ({ userData }) => {
  const programId = userData.programs[0].id;

  // TODO: Add use Program tracker to find the tracker for this program
  const {
    data: programTrackerData,
    isLoading: programTrackerIsLoading,
    refetch: refetchProgramTrackerData,
  } = useGetProgramTracker(userData.program_trackers[0].id);

  // TODO: Get the Program
  const {
    data: programData,
    isLoading: programIsLoading,
    refetch: refetchProgramData,
  } = useProgram(programId);

  if (programIsLoading || programTrackerIsLoading) return <p>Loading...</p>;

  const programLength = programData.daily_workouts.length;
  const programTrackerId = programTrackerData.id;
  const currentDay = programTrackerData.current_day;

  return (
    <Fragment>
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker
          programTitle={userData.programs[0].program_title}
          programTrackerId={programTrackerId}
          programLength={programLength}
          currentDay={currentDay}
        />
      </div>
      <DailyWorkoutCards
        programTrackerData={programTrackerData}
        programData={programData}
        refetchProgramData={refetchProgramData}
        refetchProgramTrackerData={refetchProgramTrackerData}
      />
    </Fragment>
  );
};

export default Workout;
