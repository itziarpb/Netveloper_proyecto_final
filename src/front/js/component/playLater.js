import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalLater } from "./modal";

export const PlayLater = () => {
  const { store, actions } = useContext(Context);
  const [playLater, setPlayLater] = useState();

  //Obtener la lista de videos guardados
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
  //Obtener la lista de videos guardados

  return (
    <div className="container">
      <h3 className="titleCarousel">Mis videos guardados</h3>
      <div className="borde row">
        {playLater?.map((video, index) => (
          <div className="d-flex">
            <img
              className="imgPlayLater p-1"
              data-bs-toggle="modal"
              data-bs-target={`#${video.video.video_id}`}
              src={`https://i.ytimg.com/vi/${video.video.video_id}/mqdefault.jpg`}
            ></img>
            <div className="d-flex">{video.video.videotitle}</div>
            <ModalLater
              video_id={video.video.video_id}
              videotitle={video.video.videotitle}
              playlist={video.video.playlist}
              id={video.id}
              setPlayLater={setPlayLater}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
