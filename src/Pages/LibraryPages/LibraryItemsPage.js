import { Fragment, useState } from "react";

import { useLibraryItems } from "../../components/AdminComponents/Library/Hooks/use-library-items";
import DeleteLibraryItem from "../../components/AdminComponents/Library/DeleteLibraryItem";
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
  const { data } = useLibraryItems();
  
  const [deleteLibraryItemIsShown, setDeleteLibraryItemIsShown] =
    useState(false);
  const [libraryItemDetails, setLibraryItemDetails] = useState({
    id: 0,
    title: "Unknown",
  });

  const deleteLibraryItemHandler = () => {
    console.log(
      `Delete Library item ${libraryItemDetails.title} with ID: ${libraryItemDetails.id}`
    );
    setDeleteLibraryItemIsShown(false);
  };

  const showDeleteLibraryItemHandler = (libraryItem) => {
    setDeleteLibraryItemIsShown(true);
    setLibraryItemDetails(libraryItem);
  };

  const hideDeleteLibraryItemHandler = () => {
    setDeleteLibraryItemIsShown(false);
  };

  const libraryItems = data.map((libraryItem) => {
    return (
      <LibraryItemCard
        key={libraryItem.id}
        title={libraryItem.title}
        videoUrl={videoOne}
        onDelete={() => showDeleteLibraryItemHandler(libraryItem)}
      />
    );
  });

  return (
    <Fragment>
      {deleteLibraryItemIsShown && (
        <DeleteLibraryItem
          libraryItem={libraryItemDetails}
          onClose={hideDeleteLibraryItemHandler}
          onDelete={deleteLibraryItemHandler}
        />
      )}
      <AdminBanner searchBar library />
      <div className={classes.gridContainer}>
        <div className={classes.libraryItemCardGrid}>{libraryItems}</div>
      </div>
    </Fragment>
  );
};

export default LibraryItemsPage;
