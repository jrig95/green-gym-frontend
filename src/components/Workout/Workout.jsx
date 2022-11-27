import classes from "./Workout.module.css";
import { Fragment } from "react";

import LoadingSpinnerLarge from "../UI/LoadingSpinnerLarge";
import { useFiveDayArray } from "../Trackers/hooks/use-five-day-array";
import DailyWorkoutCards from "./DailyWorkoutCards";
import { useProgram } from "../Program/hooks/use-program";
import { useGetProgramTracker } from "../Trackers/hooks/use-program-tracker";

import WorkoutDayTracker from "./WorkoutDayTracker";
import { useTranslation } from "react-i18next";


const Workout = ({ userData = {programs: []} }) => {
  const { t } = useTranslation();
  const programId = userData?.programs && userData?.programs[0]?.id;
  const programTrackerNewId = userData?.program_trackers && userData.program_trackers[0].id;

  // TODO: Add use Program tracker to find the tracker for this program
  const {
    data: programTrackerData,
    isLoading: programTrackerIsLoading,
    refetch: refetchProgramTrackerData,
    isError: programTrackerIsError,
  } = useGetProgramTracker(programTrackerNewId);

  // TODO: Get the Program
  const {
    data: programData,
    isLoading: programIsLoading,
    refetch: refetchProgramData,
    isError: programIsError,
  } = useProgram(programId);

  const {
    data: fiveDayArrayData,
    isLoading: fiveDayArrayIsLoading,
    refetch: refetchFiveDayArray,
    isError: fiveDayArrayIsError,
  } = useFiveDayArray(programTrackerNewId);

  if (programIsLoading || programTrackerIsLoading || fiveDayArrayIsLoading)
    return <LoadingSpinnerLarge />;
  if (programIsError || fiveDayArrayIsError || programTrackerIsError) return <p>Something went wrong, no data at this moment. Please try again later</p>;

  const programLength = programData?.daily_workouts?.length;
  // const programTrackerId = programTrackerData.id;
  const currentDay = programTrackerData?.current_day;

  if (programLength === currentDay)
    return (
      <div className={classes.workoutFinishedContainer}>
        <div className={classes.workoutDayTrackerContainer}>
          <WorkoutDayTracker
            programTitle={userData?.programs[0]?.program_title}
            fiveDayArrayData={fiveDayArrayData}
            programLength={programLength}
            currentDay={currentDay}
          />
        </div>
        <div className={classes.workoutFinishedMessages}>
          <h1>{t("workout_workout_complete")}</h1>
          <h2>{t("workout_workout_claim_rewards")}</h2>
        </div>
      </div>
    );

  return (
    <Fragment>
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker
          programTitle={userData?.programs[0]?.program_title}
          fiveDayArrayData={fiveDayArrayData}
          programLength={programLength}
          currentDay={currentDay}
        />
      </div>
      <DailyWorkoutCards
        programTrackerData={programTrackerData}
        programData={programData}
        fiveDayArrayData={fiveDayArrayData}
        refetchFiveDayArray={refetchFiveDayArray}
        refetchProgramData={refetchProgramData}
        refetchProgramTrackerData={refetchProgramTrackerData}
      />
    </Fragment>
  );
};

export default Workout;
