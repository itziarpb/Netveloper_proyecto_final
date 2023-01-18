import React, { useContext } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const CarouselJs = () => {
  const { store, actions } = useContext(Context);
  const JsplayList = store.dataPlayList.filter(
    (playlist) => playlist.playlistCategory == 3
  );

  return (
    <div className="container">
      <h3 className="titleCarousel">JAVASCRIPT</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {JsplayList.map((jsImage, index) => (
            <Card
              title={jsImage.playlisttitle}
              url={jsImage.playlistimg}
              id={jsImage.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
