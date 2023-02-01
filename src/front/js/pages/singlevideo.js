import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singlevideo.css"

export const SingleVideo = () => {

  const params = useParams();
  const [video, setVideo] = useState();
  const [playlist, setPlayList] = useState([]);
  const [state, setState] = useState();
  const [playlater, setPlayLater] = useState();
  const [statelike, setStateLike] = useState();




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

      response === null ? setState("btn btn-success btn-lg"): setState("btn btn-danger btn-lg disabled")
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
       response === null ? setStateLike("btn btn-success btn-lg"): setStateLike ("btn btn-danger btn-lg disabled")
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
    setState("btn btn-danger btn-lg disabled")
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
    setStateLike("btn btn-danger btn-lg disabled")
  }
    

    
    
  
   return (
  <>
    <div class="container">
      {
        video ? (
          <>
            <h1 className="colortitles pb-4 pt-4">{video.videotitle}</h1>
              <div className="row">
                  
                  <div className="ratio ratio-16x9">
                    <iframe src={`https://www.youtube.com/embed/${video.video_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  
                  
                    <div className="row">
                    <i className="far fa-4x fa-heart" onClick={seeLater}></i> 
                    <i className="fas fa-4x fa-list" onClick={seeLater}></i>
                    <i class="fab fa-4x fa-whatsapp"></i>   
                    <i class="fab fa-4x fa-telegram-plane"></i>              
                      <button type="button" className={statelike} onClick={likeVideo}>Me gusta</button>
                    </div>
              </div>
            <div><h2 className="colortitles pt-4">Curso completo</h2></div>

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
          </>
        ) : ""
      } 
    
    </div>
   </>
  );
};
