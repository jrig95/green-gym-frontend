import classes from "./ExerciseOverviewCard.module.css";
import Card from "../UI/Card";
import ExerciseOverviewRow from "./ExerciseOverviewRow";
import { useTranslation } from "react-i18next";


const ExerciseOverviewCard = ({ exercises, admin, programId }) => {
  const { t } = useTranslation();

  const exerciseRows = exercises.map((exercise) => {
    return (
      <ExerciseOverviewRow
        key={exercise.id}
        exercise={exercise}
        sets={exercise.number_of_sets}
        admin={admin}
        programId={programId}
      />
    );
  });

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <div className={classes.exerciseHeader}>
          <h2>{t("exercise_overview_card_exercise")}</h2>
        </div>
        <div className={classes.setsHeader}>
          <h2>{t("exercise_overview_card_sets")}</h2>
        </div>
      </div>
      {exerciseRows}
    </Card>
  );
};

export default ExerciseOverviewCard;
