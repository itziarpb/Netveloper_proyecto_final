import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const PlayLater = () => {
  const { store, actions } = useContext(Context);
  const [myvideos, setMyVideos] = useState([]);
  const [videosApi, setVideosApi] = useState([]);

  const myplayLater = store.playLater.filter(
    (list) => list.user_id == store.dataUser.id
  );
  console.log("videos de playLater", myplayLater);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/video")
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })
      .then((response) => {
        setVideosApi(response);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log("videos del api", videosApi);

  myplayLater.map((video) => {
    const newvideo = videosApi.find((element) => element.id == video.video_id);
    console.log(newvideo);
    // setMyVideos([...myvideos, newvideo]);
  });

  console.log("Mis videos", myvideos);

  return (
    <div className="container">
      <h3 className="titleCarousel">Mis videos guardados</h3>
      <div className="">
        {/* {myvideos.map((video, index) => (
          <div>Hola </div>
        ))} */}
      </div>
    </div>
  );
};
