import classes from "./ProgramCard.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { useState } from "react";

export const AddProgramCard = () => {
  const [state, setState] = useState({
    program_title: "",
    program_description: "",
    photo_url: "",
  });
  return (
    <Card className={classes.card}>
      <input
        style={{
          fontSize: "1.4rem",
        }}
        placeholder="PROGRAM TITLE"
        maxLength="18"
        onChange={(e) => {
          setState({ ...state, program_title: e.target.value });
        }}
      ></input>
      <div className={classes.image}>
        <label htmlFor="upload_image">
          <RiAddCircleLine size="6rem" color="darkgreen" />
        </label>
        <input
          id="upload_image"
          name="upload_image"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            setState({ ...state, photo_url: e.target.value });
          }}
        />
      </div>

      <textarea
        placeholder="use one sentence to describe your program"
        cols={30}
        onChange={(e) => {
          setState({ ...state, program_description: e.target.value });
        }}
      ></textarea>
      <Link to="add-program" state={state}>
        <button className={classes.createButton}>CREATE</button>
      </Link>
    </Card>
  );
};
