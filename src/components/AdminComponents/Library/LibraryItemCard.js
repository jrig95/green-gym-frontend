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
  const canvasRef = document.getElementById("libVideo");
  const ctx = canvasRef?.getContext("2d");
  useEffect(() => {
    relabsEmitter.on("libVideo", (video) => {
      console.log(video, canvasRef);
      setLibVideo(video);
    });
    return () => {
      relabsEmitter.off("libVideo");
    };
  }, []);
  useEffect(() => {
    if (!libVideo) return;
    libVideo.load();
    libVideo.addEventListener("loadeddata", () => {
      canvasRef.width = libVideo.videoWidth;
      canvasRef.height = libVideo.videoHeight;
    });
    libVideo.addEventListener("canplay", () => {
      libVideo.play();
      libVideo.currentTime = 1;
      ctx.drawImage(libVideo, 0, 0, canvasRef.width, canvasRef.height);
    });
  }, [libVideo]);
  return (
    <Card className={classes.card}>
      <Link to={url}>
        <div style={{ display: "grid", placeContent: "center" }}>
          <canvas key={canvasRef}></canvas>
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
