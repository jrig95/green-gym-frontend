import classes from "./WorkoutDayTracker.module.css";
import Card from "../UI/Card";
import { useTranslation } from "react-i18next";


const WorkoutDayTracker = ({
  programTitle,
  fiveDayArrayData,
  programLength,
  currentDay,
}) => {
  const { t } = useTranslation();

  // const {
  //   data: fiveDayArrayData,
  //   isLoading: fiveDayArrayIsLoading,
  //   refetch: refetchFiveDayArray,
  // } = useFiveDayArray(programTrackerId);
  // // TODO: Get program length

  // if (fiveDayArrayIsLoading) return <p>Loading...</p>;

  // const refetchFiveDayArrayHandler = () => {
  //   refetchFiveDayArray();
  // };

  const fiveDayArray = fiveDayArrayData?.five_day_array?.map((day) => {
    const percentComplete = parseInt(
      (day.percentage_complete * 100).toFixed(2)
    );

    let dayClasses = `${classes.day}`;
    let dayNumberClasses = `${classes.dayNumber}`;
    let dayPercentageClasses = `${classes.percentage}`;

    if (currentDay + 1 === day.dwt_day_number) {
      dayClasses = `${classes.day} ${classes.dayCurrent}`;
      dayNumberClasses = `${classes.dayNumber} ${classes.dayNumberCurrent}`;
      dayPercentageClasses = `${classes.percentage} ${classes.percentageCurrent}`;
    }

    if (currentDay + 1 < day.dwt_day_number) {
      dayNumberClasses = `${classes.dayNumber} ${classes.dayNumberNext}`;
      dayPercentageClasses = `${classes.percentage} ${classes.percentageNext}`;
    }

    return (
      <Card key={day.id} className={dayClasses}>
        <p className={dayNumberClasses}>
          {t("workout_day_tracker_day")} {day.dwt_day_number}/{programLength}
        </p>
        <p className={dayPercentageClasses}>{percentComplete}%</p>
      </Card>
    );
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.programName}>{programTitle}</h1>
      <Card className={classes.tracker}>{fiveDayArray}</Card>
    </div>
  );
};

export default WorkoutDayTracker;
