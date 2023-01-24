import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singlevideo.css"

export const SingleVideo = () => {

  const params = useParams();
  const [video, setVideo] = useState();
  const [playlist, setPlayList] = useState([]);
  const [state, setState] = useState("btn btn-danger btn-lg");

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

  const like = ()=>{
    console.log(video.video_id)
    setState("btn btn-danger btn-lg disabled")
  }
   return (
  <>
    <div class="container">
      {
        video ? (
          <>
            <h1 className="text pb-4 pt-4">{video.videotitle}</h1>
              <div className="row">
                  <div className="col-sm-7">
                    <iframe width="720" height="576" src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <div className="col-sm-5 ">
                    <p className="overflow-auto text div">{video.videodescription}</p>
                    <div className="pb-4">
                      <button type="button" className={state} onClick={like}>Me gusta</button>
                    </div>
                    <div>
                    <button type="button" class="btn btn-success btn-lg">Ver más tarde</button>
                    </div> 
                  </div>
              </div>
            
            <div><h2 className="text pt-4">Curso completo</h2></div>

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
