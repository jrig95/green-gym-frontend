import { Fragment, useState } from "react";

import DeleteLibraryItem from "./DeleteLibraryItem";
import videoOne from "../../assets/exercise_video_1.mp4";
import LibraryItemCard from "../../components/AdminComponents/Library/LibraryItemCard";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import classes from "./LibraryItemsPage.module.css";

const DUMMY_ITEMS = [
  {
    id: "li1",
    title: "push up",
    videoUrl: videoOne,
  },
  {
    id: "li2",
    title: "squat",
    videoUrl: videoOne,
  },
  {
    id: "li3",
    title: "bench press",
    videoUrl: videoOne,
  },
  {
    id: "li4",
    title: "push up",
    videoUrl: videoOne,
  },
  {
    id: "li5",
    title: "push up",
    videoUrl: videoOne,
  },
  {
    id: "li6",
    title: "push up",
    videoUrl: videoOne,
  },
  {
    id: "li7",
    title: "push up",
    videoUrl: videoOne,
  },
  {
    id: "li8",
    title: "push up",
    videoUrl: videoOne,
  },
  {
    id: "li9",
    title: "push up",
    videoUrl: videoOne,
  },
];

const LibraryItemsPage = () => {
  const [deleteLibraryItemIsShown, setDeleteLibraryItemIsShown] = useState(false);
  const [libraryItemDetails, setLibraryItemDetails] = useState({
    id: 0,
    title: "Unknown"
  })

  const deleteLibraryItemHandler = () => {

  };

  const showDeleteLibraryItemHandler = () => {};

  const hideDeleteLibraryItemHandler = () => {};

  const libraryItems = DUMMY_ITEMS.map((libraryItem) => {
    return (
      <LibraryItemCard
        key={libraryItem.id}
        title={libraryItem.title}
        videoUrl={libraryItem.videoUrl}

      />
    );
  });

  return (
    <Fragment>
      <DeleteLibraryItem libraryItem={libraryItemDetails}/>
      <AdminBanner searchBar library />
      <div className={classes.gridContainer}>
        <div className={classes.libraryItemCardGrid}>
          {libraryItems}
        </div>
      </div>
    </Fragment>
  );
};

export default LibraryItemsPage;
