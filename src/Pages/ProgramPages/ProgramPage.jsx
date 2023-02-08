import { Link, useParams } from "react-router-dom";
import { Fragment, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import ProgramWorkoutDetails from "../../components/Program/ProgramWorkoutDetails";
import { getIdFromSlug } from "../../utils/get-id-from-slug";
import { useProgram } from "../../components/Program/hooks/use-program";
import { Button } from "@mantine/core";
//import Button from "../../components/UI/Button";
import classes from "./ProgramPage.module.css";
import Banner from "../../components/Layout/Banner";
// import ExerciseOverviewCard from "../../components/Exercise/ExerciseOverviewCard";
import { useTranslation } from "react-i18next";
import { ProgramField } from "../../components/Program/ProgramField";

const ProgramPage = () => {
  const { t } = useTranslation();
  const params = useParams();

  // TODO: Add modal to update the program details

  // TODO: Get user from context and check if admin
  const authCtx = useContext(AuthContext);
  const admin = authCtx.isAdmin;

  // TODO: add edit buttons to all parts - program / Daily workouts / exercises / exercise overview

  // Approach two - update to Dailyworkout end point - creating a new component. Sean will need to

  // Get the Id from the slug using routes
  const programId = getIdFromSlug(params.programId);
  // Get program data
  const {
    data: programData,
    isLoading: programIsLoading,
    isError,
  } = useProgram(programId);

  const pageNumber = programData?.daily_workouts?.length || 0;

  const programWorkouts = programData?.daily_workouts?.map((workout) => {
    return (
      <ProgramWorkoutDetails
        key={workout.id}
        programId={programId}
        dailyWorkoutId={workout.id}
        admin={admin}
        workout={workout}
      />
    );
  });

  const fieldProps = {
    number_of_days: {
      text: "program days",
      icon: "📅",
      classname: classes.days,
      type: "number",
    },
    daily_workouts: {
      text: "workouts",
      icon: "🏋️‍♀️",
      classname: classes.workouts,
      type: "number",
    },
    trees_planted: {
      text: "trees planted",
      icon: "🌳",
      classname: classes.trees,
      type: "number",
    },
    calories_burned: {
      text: "calories burnt",
      icon: "🔥",
      classname: classes.calories,
      type: "number",
    },
    calorie_credits: {
      text: "calorie reward",
      icon: "🏆",
      classname: classes.credits,
      type: "number",
    },
    price: {
      icon: "💰",
      type: "number",
      classname: "",
    },
  };
  if (isError) {
    return <div>Something went wrong</div>;
  }

  const ProgramDisplay = () => {
    return (
      <Fragment>
        <Banner title={programData.program_title} />
        {admin && (
          <div className={classes.updateButtonContainer}>
            <Link to="edit" state={programData}>
              <Button color="green">Update Program</Button>
            </Link>
          </div>
        )}
        <main className={classes.container}>
          <div className={classes.des}>
            <h3>{programData.program_description}</h3>
            {/* <p>{programData.program_info || textPlaceHolder}</p> */}
          </div>
          <div className={classes.upload}>
            <img src={programData.photo_url} alt={programData.program_title} />
          </div>
          {Object.entries(fieldProps).map(([key, value]) => {
            return (
              <div className={value.classname}>
                <ProgramField
                  field={key}
                  fieldValue={programData[key]}
                  fieldObj={value}
                />
              </div>
            );
          })}
          <div className={classes.more_des}></div>

          <div className={classes.purchase}>
            {!admin && (
              <Link to="purchase">
                <Button>{t("purchase_page_purchase")}</Button>
              </Link>
            )}
            {admin && !programData.daily_workouts && (
              <Link to="buildProgram" state={{ pageNumber }}>
                <Button color="green">Continue Building Program</Button>
              </Link>
            )}
          </div>
        </main>
      </Fragment>
    );
  };
  return <ProgramDisplay />;
};

export default ProgramPage;
