import React, { useContext, useState, useEffect } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const CarouselHtml = () => {
  const { store, actions } = useContext(Context);
  const [id, setId] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/category")
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })
      .then((response) => {
        console.log(response);
        const category = response.find((element) => element.category == "html");
        setId(category.id);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  const carrusel = store.dataPlayList.filter(
    (playlist) => playlist.category == id
  );

  return (
    <div className="container">
      <h3 className="titleCarousel">HTML</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {carrusel.map((carrusel, index) => (
            <Card
              title={carrusel.playlisttitle}
              url={carrusel.thumbnails}
              id={carrusel.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
