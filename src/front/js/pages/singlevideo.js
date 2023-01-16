import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlevideo.css"

export const SingleVideo = () => {
 
  const [id1, setId1] = useState();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=rbuYtrNUxg4&key=AIzaSyCLGNOAdPMC9vfdOzhZyOMMuO4OBOtvXZA`
    )
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setId1(response.items[0].snippet.description);
        console.log(response.items[0].snippet.description);
        
        
      })
      .catch((error) => console.error("Error:", error));
      }, []);


  return (
  <>

  <div class="container">
        <h1 class="text pb-4 pt-4">Curso HTML para principiantes</h1>
        <div class="row">
        <div class="col-sm-7"><iframe width="720" height="576" src="https://www.youtube.com/embed/rbuYtrNUxg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-sm-5"><p className="text">{id1}</p></div>
        </div>
    
  
  
  
  
  
  
    </div>;
 
  
   </>
  );
};

