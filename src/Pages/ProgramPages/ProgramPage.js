import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react";

import AuthContext from "../../context/AuthContext";
import ProgramWorkoutDetails from "../../components/Program/ProgramWorkoutDetails";
import { getIdFromSlug } from "../../utils/get-id-from-slug";
import { useProgram } from "../../components/Program/hooks/use-program";
import Button from "../../components/UI/Button";
import classes from "./ProgramPage.module.css";
import Banner from "../../components/Layout/Banner";
import { useTranslation } from "react-i18next";

// import ExerciseOverviewCard from "../../components/Exercise/ExerciseOverviewCard";
import UpdateProgram from "../../components/Program/UpdateProgram";

const ProgramPage = () => {
  const { t } = useTranslation();
  const [updateProgramIsShown, setUpdateProgramIsShown] = useState(false);
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
  const { data: programData, isLoading: programIsLoading } =
    useProgram(programId);

  const showUpdateProgramHandler = () => {
    setUpdateProgramIsShown(true);
  };

  const hideUpdateProgramHandler = () => {
    setUpdateProgramIsShown(false);
  };

  let programWorkouts = [];

  if (!programIsLoading) {
    programWorkouts = programData.daily_workouts.map((workout) => {
      return (
        <ProgramWorkoutDetails
          key={workout.id}
          programId={programId}
          dailyWorkoutId={workout.id}
          admin={admin}
        />
      );
    });
  }

  return (
    <Fragment>
      <Banner title={programData.program_title} />
      <div className={classes.container}>
        {updateProgramIsShown && (
          <UpdateProgram
            programData={programData}
            programIsLoading={programIsLoading}
            onClose={hideUpdateProgramHandler}
          />
        )}
        {admin && (
          <div className={classes.updateButtonContainer}>
            <Button color="blue" onClick={showUpdateProgramHandler}>
              {t("program_page_update_page")}
            </Button>
          </div>
        )}
        <div className={classes.descriptionContainer}>
          <div className={classes.description}>
            <h3>{programData.program_description}</h3>
          </div>
          <img src={programData.photo_url} alt={programData.program_title} />
        </div>
        <div className={classes.exerciseCardContainer}>
          <div className={classes.programWorkoutsGrid}>{programWorkouts}</div>
        </div>
        <div className={classes.purchaseContainer}>
          <h3>
            {t("program_page_price")}
            {programData.price}</h3>
          <Link to="purchase">
            <Button>
              {t("program_page_purchase")}
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ProgramPage;
