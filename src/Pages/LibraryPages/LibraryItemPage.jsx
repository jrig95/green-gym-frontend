import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

import { useLibraryItem } from "../../components/AdminComponents/Library/Hooks/use-library-item";
import Banner from "../../components/Layout/Banner";
import classes from "./LibraryItemPage.module.css";
import Card from "../../components/UI/Card";

const LibraryItemPage = () => {
  // Get id from params
  const params = useParams();

  const id = params.libraryId;

  const { data } = useLibraryItem(id);
  const { title, video_url, tag_list: tags } = data;
  return (
    <Fragment>
      <Banner title={title} />
      <div className={classes.container}>
        <ReactPlayer
          playing={true}
          url={video_url}
          controls={true}
          style={{ maxWidth: "24rem" }}
          className={classes.video_player}
        />
        <div className={classes.tags}>
          {tags?.map((tag, i) => {
            return (
              <Card key={i} className={classes.tag}>
                {tag}
              </Card>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default LibraryItemPage;
