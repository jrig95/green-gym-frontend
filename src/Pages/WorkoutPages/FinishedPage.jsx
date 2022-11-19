import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import classes from "./FinishedPage.module.css";
import { random } from "../../utils/random";
import { useTranslation } from "react-i18next";


const FinishedPage = ({ workout }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const okButtonClickHandler = () => {
    navigate("/activities");
  };

  const workoutMessageOne = t("workout_out_message_one")
  const workoutMessageTwo = t("workout_out_message_two")
  const workoutMessageThree = t("workout_out_message_three")


  const workoutMessageArray = [
    workoutMessageOne,
    workoutMessageTwo,
    workoutMessageThree,
  ];

  const dayMessageOne = t("day_message_one")
  const dayMessageTwo = t("day_message_two")
  const dayMessageThree = t("day_message_three")

  const dayMessageArray = [
    dayMessageOne,
    dayMessageTwo,
    dayMessageThree
  ];

  const message = workout
    ? random(workoutMessageArray)
    : random(dayMessageArray);
  const finishedMessage = workout ? t("finished_page_workout_finished") : t("finished_page_day_finished");

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{finishedMessage}</h1>
        <h3>{message}</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button onClick={okButtonClickHandler}>{t("finished_page_continue")}</Button>
      </div>
    </div>
  );
};

export default FinishedPage;
