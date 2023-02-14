import classes from "./ProgramPage.module.css";
import { RiAddCircleLine } from "react-icons/ri";
import { Fragment, useState } from "react";
import Banner from "../../components/Layout/Banner";
import Button from "../../components/UI/Button";
import { FaSpinner } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ProgramField } from "../../components/Program/ProgramField";
import { useUpdateProgram } from "../../components/Program/hooks/use-update-program";
import { useEffect } from "react";

// create a creation page with same layout as ProgramPage
const ProgramUpdate = () => {
  const { mutateAsync, isError, isLoading } = useUpdateProgram();
  const { state } = useLocation();
  const { program_library_item_id, ...omittedProgramData } = state;
  const navigate = useNavigate();
  const [programObj, setProgramObj] = useState({});
  const [imageLoaded, setImageLoaded] = useState(!!programObj.photo_url);

  const handleInputChange = (e) => {
    e.preventDefault();
    setProgramObj((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };
  const fieldProps = {
    number_of_days: {
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
      icon: "🌳",
      classname: classes.trees,
      type: "number",
    },
    calories_burned: {
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
  };
  const priceField = {
    field: "price",
    icon: "💰",
    type: "number",
  };
  useEffect(() => {
    setProgramObj({
      id: state.id,
      ...omittedProgramData,
    });
  }, [state.id]);
  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <FaSpinner />;
  return (
    <Fragment>
      <Banner
        title={programObj.program_title}
        isEditable={true}
        onChange={(e) => {
          setProgramObj({
            ...programObj,
            program_title: e.target.value,
          });
        }}
      />
      <main className={classes.container}>
        <textarea
          className={classes.des}
          onChange={(e) => {
            setProgramObj({
              ...programObj,
              program_description: e.target.value,
            });
          }}
          value={programObj.program_info || ""}
        ></textarea>
        <div className={classes.upload}>
          <label htmlFor="upload_image">
            {!imageLoaded && !programObj.photo_url ? (
              <RiAddCircleLine size="6rem" color="darkgreen" />
            ) : (
              <img src={programObj.photo_url} width="100%" />
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
              <ProgramField
                key={value.id}
                field={key}
                fieldObj={value}
                onChange={handleInputChange}
                fieldValue={programObj[key]}
                isEditable={true}
              />
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
          onChange={(e) => {
            setProgramObj({
              ...programObj,
              program_description: e.target.value,
            });
          }}
          value={programObj.program_description || ""}
        ></textarea>
        <ProgramField
          field="price"
          fieldObj={priceField}
          fieldValue={programObj.price}
          onChange={handleInputChange}
        />
        <Button
          className={classes.purchase}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            mutateAsync(programObj, {
              onError: (error) => {
                navigate("/programs");
                console.error(error);
              },
            }).then(() => {
              navigate(`/programs/${programObj.id}`);
            });
          }}
        >
          UPDATE
        </Button>
      </main>
    </Fragment>
  );
};

export default ProgramUpdate;
