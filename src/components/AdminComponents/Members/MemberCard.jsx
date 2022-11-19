import Card from "../../UI/Card";
import classes from "./MemberCard.module.css";

const MemberCard = ({ user }) => {

  const convertFromStringToDate = (user_date) => {
    let dateComponent = user_date.split("T");
    let datePieces = dateComponent[0].split("-");
    let timePieces = dateComponent[1].split(":");
    let date = (new Date(datePieces[0], (datePieces[1] - 1), datePieces[2],
    timePieces[0], timePieces[1]))

    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    const time = (date.toLocaleString('en-US', { hour12: false }).split(",")[1]);
    return(`${month}  ${day}, ${year}, ${time} (CST)`)
  };

  const checkDateExists = (date) => {
    if (date === null) {
      return (date);
    } else {
      return (convertFromStringToDate(date));
    };
  };

  const createdAt = checkDateExists(user.created_at)
  const lastLogIn = checkDateExists(user.last_sign_in_at)

  return (
    <Card className={classes.card}>
      <div className={classes.profilePictureContainer}>
        <img
          src={user.photo_url}
          alt={`${user.first_name}`}
        />
      </div>
      <div className={classes.userDetailsContainer}>
        <h2>
          <b>First Name: </b>{user.first_name}
        </h2>
        <h2>
          <b>Last Name: </b>{user.last_name}
        </h2>
        <h2>
          <b>E-Mail: </b>{user.email}
        </h2>
        <h2>
          <b>Age: </b>{user.age}
        </h2>
        <h2>
          <b>Fitness Level: </b>{user.user_fitness_level}
        </h2>
        <h2>
          <b>Passions: </b>{user.user_passions}
        </h2>
        <h2>
          <b>Calories: </b>{user.user_total_calories}
        </h2>
        <h2>
          <b>Signed Up: </b>{createdAt}
        </h2>
        <h2>
          <b>Last Logged In: </b>{lastLogIn}
        </h2>
      </div>
    </Card>
  );
};

export default MemberCard;
