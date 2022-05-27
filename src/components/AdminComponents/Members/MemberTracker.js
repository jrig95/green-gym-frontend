import { useGetProgramTracker } from "../../Trackers/hooks/use-program-tracker";
import MemberTrackerCard from "./MemberTrackerCard";
import { Fragment } from "react";

const MemberTracker = ({ trackerId }) => {
  console.log(trackerId);
  const { data: trackerData, isLoading: trackerIsLoading } = useGetProgramTracker(trackerId);

  if (trackerIsLoading) return <p>Loading...</p>

  console.log(trackerData);

  return (
    <Fragment>
      <h2>Day 1</h2>
      <MemberTrackerCard />
    </Fragment>
  );
};

export default MemberTracker;
