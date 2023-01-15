import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVideo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [videosPlayList, setVideosPlayList] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&playlistId=PLhSj3UTs2_yVHt2DgHky_MzzRC58UHE4z&key=AIzaSyAA-IZ2KCTRqgGn8Emt2_nC0vQ7OayQqfA"
  //   ).then((response) => {
  //     console.log(response.ok);
  //     return response.json().then((response) => {
  //       setVideosPlayList(response);
  //     });
  //   });
  // }, []);
  // console.log("funciona?", videosPlayList.items);

  return (
    <div className="container">
      <div>
        <h1>{}</h1>
      </div>
    </div>
  );
};
