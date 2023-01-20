import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlevideo.css"

export const SingleVideo = () => {

 
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/video")
    
    .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setId(response[3].video_id)
        setTitle(response[3].videotitle)
        setDescription(response[3].videodescription)
        console.log(response[3]);
        
        
      })
      .catch((error) => console.error("Error:", error));
      }, []);
      


  /*Llamada a playlist*/

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/playlists")
    
    .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setThumbnail(response)
        
        
      })
      .catch((error) => console.error("Error:", error));
      }, []);

  



  return (

  <>

  <div class="container">
        <h1 class="text pb-4 pt-4">{title}</h1>
        <div class="row">
        <div class="col-sm-7"><iframe width="720" height="576" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-sm-5"><p className="text">{description}</p></div>
        </div>
        <div><h2 className="text pt-4">Resto del Curso</h2></div>



    
  
  
  
  
  
  
    </div>;
 
  
   </>

  );
};
