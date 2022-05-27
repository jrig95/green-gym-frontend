import { useState, useRef, useContext } from "react";

import { useUpdateProfileImage } from "../User/hooks/use-update-profile-image";
import AuthContext from "../../context/AuthContext";
import { Fragment } from "react";
import classes from "./UpdateProfileImageForm.module.css";
import Button from "../UI/Button";

const UpdateProfileImageForm = ({ onClose }) => {
  // Get user id
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userId;
  // Call user mutate
  const updateProfileImage = useUpdateProfileImage();

  const imageRef = useRef();
  const [selectedImageFile, setSelecetedImageFile] = useState("");

  const formNotValid = selectedImageFile === "";

  const fileSelectHander = (event) => {
    setSelecetedImageFile(event.target.files[0]);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("user[photo]", selectedImageFile);

    const user = {
      id: userId,
      photo: formData
    }

    // console.log(user.id);
    // console.log(user.photo);

    updateProfileImage(user);
    onClose();
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Add Your Photo</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            {/* <label htmlFor="image">Profile Photo</label> */}
            <input
              style={{ display: "none" }}
              type="file"
              id="image"
              accept="image/jpeg image/png"
              onChange={fileSelectHander}
              ref={imageRef}
            />
            <Button size="small" onClick={() => imageRef.current.click()}>
              Add Image
            </Button>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={formNotValid}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default UpdateProfileImageForm;
