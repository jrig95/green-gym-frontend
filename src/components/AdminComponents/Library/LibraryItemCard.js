import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Card from "../../UI/Card";
import classes from "./LibraryItemCard.module.css";
import { relabsEmitter } from "../../../context/RelabsEmitter";
import { useEffect, useState } from "react";

const LibraryItemCard = ({ id, title, onDelete, onUpdate }) => {
  const url = `/library/${id}`;
  const [libVideo, setLibVideo] = useState(null);
  const canvas = document.getElementById(`libPic-${id}`);
  const ctx = canvas?.getContext("2d");
  useEffect(() => {
    relabsEmitter.on("libVideo", (video) => {
      setLibVideo(video);
    });
  }, [id]);
  useEffect(() => {
    if (!libVideo) return;
    libVideo.load();
    libVideo.addEventListener("loadeddata", () => {
      canvas.width = libVideo.videoWidth;
      canvas.height = libVideo.videoHeight;
    });
    libVideo.addEventListener("canplay", () => {
      libVideo.play();
      libVideo.currentTime = 1;
      ctx.drawImage(libVideo, 0, 0, canvas.width, canvas.height);
    });
  }, [libVideo]);
  return (
    <Card className={classes.card}>
      <Link to={url}>
        <div style={{ display: "grid", placeContent: "center" }}>
          <canvas id={`libPic-${id}`}></canvas>
        </div>
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <div className={classes.icons}>
        <div className={classes.iconGear} onClick={onUpdate}>
          <BsFillGearFill />
        </div>
        <div className={classes.iconBin} onClick={onDelete}>
          <AiFillDelete />
        </div>
      </div>
    </Card>
  );
};

export default LibraryItemCard;
