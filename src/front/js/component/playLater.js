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
    <div className="container p-0">
      <h3 className="title">Mis videos guardados:</h3>
      <div className="borde row">
        {playLater?.length === 0 && (
          <div className="textProfile">Aún no hay videos guardados</div>)}
        {playLater?.map((video, index) => (
          <div className="row justify-content-center">
            <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2">
              <img
                className="imgPlayLater p-1"
                data-bs-toggle="modal"
                data-bs-target={`#${video.video.video_id}`}
                src={`https://i.ytimg.com/vi/${video.video.video_id}/mqdefault.jpg`}
              ></img>
              <ModalLater
              video_id={video.video.video_id}
              videotitle={video.video.videotitle}
              playlist={video.video.playlist}
              id={video.id}
              setPlayLater={setPlayLater}
            />
            </div>
            <div className=" textProfile col-12 col-sm-7 col-md-8 col-lg-9 col-xl-10">{video.video.videotitle}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
