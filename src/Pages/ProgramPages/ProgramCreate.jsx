import classes from "./ProgramPage.module.css";
import { RiAddCircleLine } from "react-icons/ri";
import { Fragment, useState } from "react";
import Banner from "../../components/Layout/Banner";
import Button from "../../components/UI/Button";
import { useCreateProgram } from "../../components/Program/hooks/use-create-program";
import { FaSpinner } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ProgramField } from "../../components/Program/ProgramField";

// create a creation page with same layout as ProgramPage
const ProgramCreate = () => {
  const { mutateAsync, isError, isLoading } = useCreateProgram();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [programObj, setProgramObj] = useState({
    program_title: "Click to Enter Header",
    number_of_days: 0,
    program_description: "",
    program_info: "",
    price: 0,
    photo_url: null,
    daily_workouts: 0,
    trees: 0,
    burnt: 0,
    rewards: 0,
    ...state,
  });
  const [imageLoaded, setImageLoaded] = useState(!!programObj.photo_url);
  if (isLoading) return <FaSpinner />;
  if (isError) return <div>Something went wrong</div>;
  const fieldProps = {
    number_of_days: {
      icon: "📅",
      classname: classes.days,
      type: "number",
      onChange(e) {
        setProgramObj({
          ...programObj,
          number_of_days: e.target.value,
        });
      },
    },
    daily_workouts: {
      text: "workouts",
      icon: "🏋️‍♀️",
      classname: classes.workouts,
      type: "number",
      onChange(e) {
        setProgramObj({
          ...programObj,
          daily_workouts: e.target.value,
        });
      },
    },
    trees: {
      icon: "🌳",
      classname: classes.trees,
      type: "number",
      onChange(e) {
        setProgramObj({
          ...programObj,
          trees: e.target.value,
        });
      },
    },
    burnt: {
      icon: "🔥",
      classname: classes.calories,
      type: "number",
      onChange(e) {
        setProgramObj({
          ...programObj,
          burnt: e.target.value,
        });
      },
    },
    rewards: {
      text: "calorie reward",
      icon: "🏆",
      classname: classes.credits,
      type: "number",
      onChange(e) {
        setProgramObj({
          ...programObj,
          rewards: e.target.value,
        });
      },
    },
  };
  return (
    <Fragment>
      <Banner
        title={programObj.program_title || "Click to Enter Program Title"}
        isEditable={true}
        onChange={(e) => {
          setProgramObj({
            ...programObj,
            program_title: e.currentTarget.innerText,
          });
        }}
      />
      <main className={classes.container}>
        <textarea
          className={classes.des}
          placeholder={"Click to write brief program infomation."}
          onInput={(e) => {
            setProgramObj({
              ...programObj,
              program_info: e.target.value,
            });
          }}
          value={programObj.program_info || ""}
        ></textarea>
        <div className={classes.upload}>
          <label htmlFor="upload_image">
            {!imageLoaded ? (
              <RiAddCircleLine size="6rem" color="darkgreen" />
            ) : (
              <img src={URL.createObjectURL(programObj.photo_url)} width={30} />
            )}
          </label>
          <input
            id="upload_image"
            name="upload_image"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => {
              setProgramObj({
                ...programObj,
                photo_url: e.target.files[0],
              });
              setImageLoaded(true);
            }}
          />
        </div>
        {Object.entries(fieldProps).map(([key, value]) => {
          return (
            <div className={value.classname}>
              <ProgramField field={key} icon={value.icon} type={value.type} />
            </div>
          );
        })}
        <textarea
          className={classes.more_des}
          placeholder={`
Click to write more program details.


For Example:


                - Program Overview

                - Client Testimonials. Rolling client testimonials or program pictures...
                
                `}
          cols={30}
          rows={20}
          onInput={(e) => {
            setProgramObj({
              ...programObj,
              program_description: e.target.value,
            });
          }}
          value={programObj.program_description || ""}
        ></textarea>
        <Button
          className={classes.purchase}
          onClick={(e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("program[program_title]", programObj.program_title);
            formData.append(
              "program[program_description]",
              programObj.program_description
            );
            formData.append("program[price]", programObj.price);
            formData.append("program[photo]", programObj.photo_url);
            formData.append(
              "program[number_of_days]",
              programObj.number_of_days
            );
            return mutateAsync(formData, {
              onSuccess: ({ data }) => {
                navigate(`/programs/${data.id}`);
              },
            });
          }}
        >
          CREATE
        </Button>
      </main>
    </Fragment>
  );
};

export default ProgramCreate;
