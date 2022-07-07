import Card from "../../UI/Card";
import classes from "./WorkoutFinishedCard.module.css";
import { useTranslation } from "react-i18next";

const WorkoutFinishedCard = () => {
  const { t } = useTranslation();
  return (
    <Card className={classes.container}>
      <h1 className={classes.title}>{t("workout_finished_card_workout_finished")}</h1>
    </Card>
  );
};

export default WorkoutFinishedCard;
