import { Fragment } from "react";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import classes from "./LibraryItemPage.module.css";

const LibraryItemPage = () => {
  // Get id from params
  // useLibraryItem to get the library item
  // display the title of the video in the banner
  // display the video in the body

  return (
    <Fragment>
      <AdminBanner />
      <div className={classes.container}>
        <h2>test</h2>
      </div>
    </Fragment>
  );
};

export default LibraryItemPage;
