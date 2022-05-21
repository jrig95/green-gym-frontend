import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

import { useLibraryItem } from "../../components/AdminComponents/Library/Hooks/use-library-item";
import Banner from "../../components/Layout/Banner";
import classes from "./LibraryItemPage.module.css";

const LibraryItemPage = () => {
  // Get id from params
  const params = useParams();
  
  const id = params.libraryId;

  const { data } = useLibraryItem(id);
  
  return (
    <Fragment>
      <Banner title={data.title} />
      <div className={classes.container}>
      <ReactPlayer
        playing={true}
        width={600}
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)" }}
        url={data.video_url}
        controls={true}
      />
      </div>
    </Fragment>
  );
};

export default LibraryItemPage;
