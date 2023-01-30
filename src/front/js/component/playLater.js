import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlayLater = () => {
  const { store, actions } = useContext(Context);
  const [playLater, setPlayLater] = useState();

  const getplayLater = async () => {
    try {
      const resp = await fetch(process.env.BACKEND_URL + "/api/playLater", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.token,
        },
      });
      const data = await resp.json();
      setPlayLater(data);
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };
  useEffect(() => {
    getplayLater();
  }, []);

  return (
    <div className="container">
      <h3 className="titleCarousel">Mis videos guardados</h3>
      <div className="row">
        {playLater?.map((video, index) => (
          <div className="d-flex">
            <img
              className="imgPlayLater p-1"
              src={`https://i.ytimg.com/vi/${video.video.video_id}/mqdefault.jpg`}
            ></img>
            <div>{video.video.videotitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
