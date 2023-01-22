import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlevideo.css"

import { Button } from "./button";

export const SingleVideo = () => {

 
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  /*const [thumbnail, setThumbnail] = useState();*/
  const [prueba, setPrueba] = useState([]); 
  const [id2, setId2] = useState();
  const [idc, setIdc] = useState("4f3GpJZtvns");


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
        
        
        
      })
      .catch((error) => console.error("Error:", error));
      }, []);
      


  /*Llamada a playlist*/

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/video")
    
    .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        console.log(response)        
        const listOfVideos = response
        
        
        let arrayPrueba = []
        arrayPrueba = listOfVideos.map(function(elem){
          let returnObjeto = {videoid:elem.video_id}
          return returnObjeto
        })
        setPrueba(arrayPrueba) 
        
        
        
      })
      .catch((error) => console.error("Error:", error));
      }, []);

      const arrayPrueba3 = prueba;
     
      

      const change = (event) =>{
        setIdc(event.target.getAttribute("id"))
        
      }
  return (

  <>
  
  <div class="container">
        <h1 className="text pb-4 pt-4">{title}</h1>
        <div className="row">
        <div className="col-sm-7"><iframe width="720" height="576" src={`https://www.youtube.com/embed/${idc}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div className="col-sm-5"><p className="text">{description}</p></div>
        </div>
        <div><h2 className="text pt-4">Resto del Curso</h2></div>

        <div className="row">
          
          {
            arrayPrueba3.map((value, index)=>{
                return <div className="col-12 col-md-4 pb-4 pt-4"><img key={index} id={value.videoid} src={`https://i.ytimg.com/vi/${value.videoid}/mqdefault.jpg`} height="100%" classname="hover" onClick={change}></img></div>

            })

            
          }

          


        </div>
      
        

    
     



    
  
  
  
  
  
  
    </div>
 
  
   </>

  );
};
