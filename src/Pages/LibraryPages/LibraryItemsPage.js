import { Fragment, useState } from "react";

import UpdateLibraryItem from "../../components/AdminComponents/Library/UpdateLibraryItem";
import { useDeleteLibraryItem } from "../../components/AdminComponents/Library/Hooks/use-delete-library-item";
import { useLibraryItems } from "../../components/AdminComponents/Library/Hooks/use-library-items";
import DeleteLibraryItem from "../../components/AdminComponents/Library/DeleteLibraryItem";
import LibraryItemCard from "../../components/AdminComponents/Library/LibraryItemCard";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import classes from "./LibraryItemsPage.module.css";

const LibraryItemsPage = () => {
  const deleteLibraryItem = useDeleteLibraryItem();
  const { data } = useLibraryItems();

  const [deleteLibraryItemIsShown, setDeleteLibraryItemIsShown] =
    useState(false);
  const [updateLibraryItemIsShown, setUpdateLibraryItemIsShown] =
    useState(false);

  const [libraryItemDetails, setLibraryItemDetails] = useState({
    id: 0,
    title: "Unknown",
  });

  const deleteLibraryItemHandler = () => {
    // console.log(
    //   `Delete Library item ${libraryItemDetails.title} with ID: ${libraryItemDetails.id}`
    // );

    deleteLibraryItem(libraryItemDetails.id);

    setDeleteLibraryItemIsShown(false);
  };

  const updateLibraryItemHandler = () => {
    console.log("delete");
  };

  const showDeleteLibraryItemHandler = (libraryItem) => {
    setDeleteLibraryItemIsShown(true);
    setLibraryItemDetails(libraryItem);
  };

  const hideDeleteLibraryItemHandler = () => {
    setDeleteLibraryItemIsShown(false);
  };

  const showUpdateLibraryItemHandler = (libraryItem) => {
    setUpdateLibraryItemIsShown(true);
    setLibraryItemDetails(libraryItem);
  };

  const hideUpdateLibraryItemHandler = () => {
    setUpdateLibraryItemIsShown(false);
  };

  const libraryItems = data.map((libraryItem) => {
    return (
      <LibraryItemCard
        key={libraryItem.id}
        id={libraryItem.id}
        title={libraryItem.title}
        videoUrl={libraryItem.video_url}
        onDelete={() => showDeleteLibraryItemHandler(libraryItem)}
        onUpdate={() => showUpdateLibraryItemHandler(libraryItem)}
      />
    );
  });

  return (
    <Fragment>
      {updateLibraryItemIsShown && (
        <UpdateLibraryItem
          libraryItem={libraryItemDetails}
          onClose={hideUpdateLibraryItemHandler}
          onUpdate={updateLibraryItemHandler}
        />
      )}
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
