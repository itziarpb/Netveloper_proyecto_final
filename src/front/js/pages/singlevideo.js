import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singlevideo.css"
import { Coments } from "../component/coments";
import { ModalContact } from "../component/modalcontacto";

export const SingleVideo = () => {

  const params = useParams();
  const [video, setVideo] = useState();
  const [playlist, setPlayList] = useState([]);
  const [state, setState] = useState();
  const [playlater, setPlayLater] = useState();
  const [statelike, setStateLike] = useState();


  const urlWhatsapp = process.env.BACKEND_URL + "/singlevideo/" + params.theid;

  useEffect(() => {

/*-------------------Llamada a playlist para recuperar videos-----------------*/

    fetch(process.env.BACKEND_URL + "/api/playlist/" + params.theid)
    .then((response) => {
        /*console.log(response.ok);*/ // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
    }).then((response) => {
        console.log(response)  
        setVideo(response[0])
        setPlayList(response)
       listar(response[0].id)
       listarLikes(response[0].id)
    }).catch((error) => console.error("Error:", error));

  }, []);

/*----------------Llamada para listar los PlayLater guardados por cada user-----------------*/
  const listar =(id)=>{
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + `/api/playLater/${id}`, {

      method: "GET",      
      headers:{
        "Content-Type": "application/json",
        Authorization: 'Bearer ' +token,
      }
      
    }).then((response)=>{
      console.log(response.status)
      return response.json();

    }).then((response)=>{
      setPlayLater(response)
      console.log(playlater)

      response === null ? setState("far fa-list-alt icons-left cursorpointer"): setState("fas fa-list-alt icons-left cursornotallowed")
    })
  }
  /*----------------Llamada para listar los Likes guardados por cada user-----------------*/
  const listarLikes =(id)=>{
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + `/api/like/${id}`, {

      method: "GET",      
      headers:{
        "Content-Type": "application/json",
        Authorization: 'Bearer ' +token,
      }
      
    }).then((response)=>{
      console.log(response.status)
      return response.json();

    }).then((response)=>{
       response === null ? setStateLike("far fa-heart icons-left cursorpointer"): setStateLike ("fas fa-heart icons-left cursornotallowed")
    })
  }

  /*----------------Function guardar video para ver más tarde-----------------*/
  const seeLater = ()=>{
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + "/api/playLater", {

      method: "POST",
      body: JSON.stringify({"video_id":`${video.id}`}),
      headers:{
        "Content-Type": "application/json",
        Authorization: 'Bearer ' +token,
      }
    })
    console.log(video.id)
    setState("fas fa-list-alt icons-left cursornotallowed")
  }

  /*----------------Function me gusta un video-----------------*/  
  const likeVideo= ()=>{
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + "/api/like", {

      method: "POST",
      body: JSON.stringify({"video_id":`${video.id}`}),
      headers:{
        "Content-Type": "application/json",
        Authorization: 'Bearer ' +token,
      }
    })
    console.log(video.id)
    setStateLike("fas fa-heart icons-left cursornotallowed")
  }
    

    
    
  
   return (
  <>
    <div class="container-fluid">
      {
        video ? (
          <>
          <div className="container">
            <h1 className="colortitles pb-4 pt-4">{video.videotitle}</h1>
              <div className="row">
                  
                <div className="ratio ratio-16x9">
                    <iframe src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                             
                <div className="icons">
                    <i className={state} onClick={seeLater}></i>
                    <i className={statelike} onClick={likeVideo}></i>   
                    <i class="fab fa-telegram-plane cursorpointer"></i>
                    <a class="fab fa-whatsapp -plane cursorpointer" href={`https://api.whatsapp.com/send?text=https://${window.location.hostname}/share/${params.theid}/${video.video_id}`}></a>
                </div>

              </div>  
          </div>
              
            <div className="container-fluid fondobanner pt-4 pb-4">
            <div className="d-flex justify-content-center"><p>¿Te gustaría subir tu contenido para ponerte a prueba?</p></div>
            <div className="d-flex justify-content-center"><button type="button" className="btn btn-primary d-flex justify-content-center"data-bs-toggle="modal" data-bs-target="#exampleModal">Contacta con nosotros</button></div>
            </div>
            <ModalContact/>
          
          <div className="container pt-5 pb-5">
            <div><h2 className="colortitles pb-4 pt-4">Curso completo</h2></div>

            <div className="row">
              {
                playlist.map((value, index)=>{
                    return (
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-4 pt-4">
                      <img className="cursorpointer" key={index} id={value.video_id} src={`https://i.ytimg.com/vi/${value.video_id}/mqdefault.jpg`} height="100%" classname="hover" onClick={()=>{
                        setVideo(value)
                        listar(value.id)
                        listarLikes(value.id)
                        
                        
                      }} />
                    </div>
                    )
                })
              }
              </div>
              </div>
          </>
        ) : ""
      } 
    
    </div>
   </>
  );
};
