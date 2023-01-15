import React, { useContext } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const CarouselCss = () => {
  const { store, actions } = useContext(Context);
  const CssplayList = store.dataPlayList.filter(
    (playlist) => playlist.playlistCategory == 2
  );

  return (
    <div className="container">
      <h3 className="titleCarousel">CSS</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {CssplayList.map((cssImage, index) => (
            <Card
              title={cssImage.playlisttitle}
              url={cssImage.playlistimg}
              id={cssImage.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
