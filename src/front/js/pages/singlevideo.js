import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlevideo.css"

export const SingleVideo = () => {
 
  const [id1, setId1] = useState();
  const [id2, setId2] = useState();
  const [id3, setId3] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/video")
    
    .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setId1(response[0].video_id)
        setId2(response[0].videotitle)
        setId3(response[0].videodescription)
        console.log(response[0]);
        
        
      })
      .catch((error) => console.error("Error:", error));
      }, []);


  return (
  <>

  <div class="container">
        <h1 class="text pb-4 pt-4">{id2}</h1>
        <div class="row">
        <div class="col-sm-7"><iframe width="720" height="576" src={`https://www.youtube.com/embed/${id1}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-sm-5"><p className="text">{id3}</p></div>
        </div>
    
  
  
  
  
  
  
    </div>;
 
  
   </>
  );
};

