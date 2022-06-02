import { useProgram } from "../../Program/hooks/use-program";
import LoadingSpinnerLarge from "../../UI/LoadingSpinnerLarge";
import { useGetProgramTracker } from "../../Trackers/hooks/use-program-tracker";
import MemberTrackerCard from "./MemberTrackerCard";
import { Fragment } from "react";

const MemberTracker = ({ trackerId, programId }) => {
  console.log(trackerId);
  const { data: trackerData, isLoading: trackerIsLoading } =
    useGetProgramTracker(trackerId);

  const { data: programData, isLoading: programIsLoading } =
    useProgram(programId);

  if (trackerIsLoading || programIsLoading) return <LoadingSpinnerLarge />;

  const clientTrackingInformation = programData.daily_workouts.map(
    (dailyWorkout, index) => {
      const exerciseTrackers = trackerData.daily_workout_trackers[index]

      if (!exerciseTrackers) return <p>Info not found. Please refresh and try again.</p>

      return (
        <Fragment key={index}>
          <h2>Day {dailyWorkout.day_number}</h2>
          <MemberTrackerCard exercises={dailyWorkout.exercises} exerciseTrackers={exerciseTrackers.exercise_trackers}/>
        </Fragment>
      );
    }
  );

  return <Fragment>{clientTrackingInformation}</Fragment>;
};

export default MemberTracker;
