import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singlevideo.css"

export const SingleVideo = () => {

  const params = useParams();
  const [video, setVideo] = useState();
  const [playlist, setPlayList] = useState([]); 

  /*Llamada a playlist*/

  useEffect(() => {

    fetch(process.env.BACKEND_URL + "/api/playlist/" + params.theid)
    .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
    }).then((response) => {
        console.log(response)  
        setVideo(response[0])
        setPlayList(response)
    }).catch((error) => console.error("Error:", error));

  }, []);

  return (
  <>
    <div class="container">
      {
        video ? (
          <>
            <h1 className="text pb-4 pt-4">{video.videotitle}</h1>
            <div className="row">
            <div className="col-sm-7"><iframe width="720" height="576" src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div className="col-sm-5"><p className="text">{video.videodescription}</p></div>
            </div>
            <div><h2 className="text pt-4">Resto del Curso</h2></div>

            <div className="row">
              {
                playlist.map((value, index)=>{
                    return (
                    <div className="col-12 col-md-4 pb-4 pt-4">
                      <img key={index} id={value.video_id} src={`https://i.ytimg.com/vi/${value.video_id}/mqdefault.jpg`} height="100%" classname="hover" onClick={()=>{
                        setVideo(value)
                      }} />
                    </div>
                    )
                })
              }
            </div>
          </>
        ) : ""
      } 
    
    </div>
   </>
  );
};
