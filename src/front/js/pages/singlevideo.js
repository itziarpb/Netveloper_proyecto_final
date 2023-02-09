import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlevideo.css";
import { Coments } from "../component/coments";
import { ModalContact } from "../component/modalcontacto";
import chico from "../../img/chico.png";

export const SingleVideo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [video, setVideo] = useState();
  const [playlist, setPlayList] = useState([]);
  const [state, setState] = useState();
  const [playlater, setPlayLater] = useState();
  const [statelike, setStateLike] = useState();
  const [likes, setLikes] = useState();

  const urlWhatsapp = process.env.BACKEND_URL + "/singlevideo/" + params.theid;

  useEffect(() => {
    /*-------------------Llamada a playlist para recuperar videos-----------------*/

    fetch(process.env.BACKEND_URL + "/api/playlist/" + params.theid)
      .then((response) => {
        /*console.log(response.ok);*/ // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setVideo(response[0]);
        setPlayList(response);
        listar(response[0].id);
        listarLikes(response[0].id);
        allLikes(response[0].id);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  /*----------------Llamada para listar los PlayLater guardados por cada user-----------------*/
  const listar = (id) => {
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + `/api/playLater/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        console.log("comprobar si esta en play later", response.status);
        return response.json();
      })
      .then((response) => {
        // setPlayLater(response);
        console.log("prueba listar", response);
        response === null
          ? setState("far fa-save  cursorpointer")
          : setState("fas fa-save  cursornotallowed");
      });
  };
  /*----------------Llamada para listar los Likes guardados por cada user-----------------*/
  const listarLikes = (id) => {
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + `/api/like/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((response) => {
        response === null
          ? setStateLike("far fa-heart cursorpointer")
          : setStateLike("fas fa-heart cursornotallowed");
      });
  };

  /*----------------Llamada para listar todos los likes de ese video-----------------*/
  const allLikes = (id) => {
    fetch(process.env.BACKEND_URL + `/api/countlikes/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((response) => {
        setLikes(response);
      });
  };

  /*----------------Function guardar video para ver más tarde-----------------*/
  const seeLater = () => {
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + "/api/playLater", {
      method: "POST",
      body: JSON.stringify({ video_id: `${video.id}` }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    console.log(video.id);
    setState("fas fa-save cursornotallowed");
  };

  /*----------------Function me gusta un video-----------------*/
  const likeVideo = () => {
    const token = localStorage.getItem("token");
    fetch(process.env.BACKEND_URL + "/api/like", {
      method: "POST",
      body: JSON.stringify({ video_id: `${video.id}` }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    console.log(video.id);
    setStateLike("fas fa-heart cursornotallowed");
    setLikes(likes+1);
  };

  /*----------------Function scroll inicio-----------------*/
  const handleClickScroll = () => {
    const element = document.getElementById("start");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div class="container-fluid">
        {video ? (
          <>
            <div className="container">
              <h1 className="colortitles mb-4 pb-2 mt-4 pt-2" id="start">
                {video.videotitle}
              </h1>
              <div className="row">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.video_id}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="icons mt-1 row">
                  {store.token != null && (
                    <>
                      <p className="iconsChild col-12 col-md-3">
                        {likes} likes
                      </p>
                      <i
                        className={`iconsChild ${state} col-6 col-sm-3 col-md-2`}
                        onClick={seeLater}
                      ></i>
                      <i
                        className={`iconsChild ${statelike} col-6 col-sm-3 col-md-2`}
                        onClick={likeVideo}
                      ></i>
                      <a className="fab fa-telegram-plane cursorpointer iconsChild col-6  col-sm-3 col-md-2"></a>
                      <a
                        className="fab fa-whatsapp -plane cursorpointer iconsChild col-6 col-sm-3 col-md-2"
                        href={`https://api.whatsapp.com/send?text=https://${window.location.hostname}/share/${params.theid}/${video.video_id}`}
                      ></a>
                    </>
                  )}
                  </div>
                </div>
              </div>
                  {store.token == null && (
          <div className="container-fluid fondobanner py-3 my-3">        
            <div className="container fondobanner ">
              <div className="row">
                  <div className="col-lg-6 col-md-4 d-flex align-items-center">
                      <div>
                        <h3 className="texto1">¡No olvides iniciar sesión!</h3>
                        <h4 className="texto2">Podrás crear tus propias listas de reproducción, dar a me gusta a tus videos favoritos y acceder a muchas más funcionalidades</h4>
                        <a className="btn btn-warning btn-lg" href="/login">Iniciar sesión</a>
                      </div>
                  </div>
                    
                  <div className="col-lg-6 col-md-4 chico">
                    <img src={chico}></img>
                  </div>              
              </div>        
            </div>     
          </div>
                    
                  )}
                
              
           
          
          

            <div className="container pt-5 pb-5">
              <div>
                <h2 className="colortitles mb-2 pb-2 mt-2 pt-2">
                  Curso completo
                </h2>
              </div>

              <div className="row">
                {playlist.map((value, index) => {
                  return (
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-4 pt-4">
                      <img
                        className="cursorpointer"
                        key={index}
                        id={value.video_id}
                        src={`https://i.ytimg.com/vi/${value.video_id}/mqdefault.jpg`}
                        height="100%"
                        classname="hover"
                        onClick={() => {
                          setVideo(value);
                          listar(value.id);
                          listarLikes(value.id);
                          allLikes(value.id);
                          handleClickScroll();
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
