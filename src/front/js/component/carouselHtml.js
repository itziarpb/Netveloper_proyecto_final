import React, { useContext } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const CarouselHtml = () => {
  const { store, actions } = useContext(Context);
  const HtmlplayList = store.dataPlayList.filter(
    (playlist) => playlist.playlistCategory == 1
  );

  return (
    <div className="container">
      <h3 className="titleCarousel">HTML</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {HtmlplayList.map((htmlImage, index) => (
            <Card
              title={htmlImage.playlisttitle}
              url={htmlImage.playlistimg}
              id={htmlImage.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
