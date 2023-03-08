import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlevideo.css";
import { Coments } from "../component/coments";
import chico from "../../img/chico.png";

export const SingleVideo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [video, setVideo] = useState();
  const [playlist, setPlayList] = useState([]);
  const [state, setState] = useState();
  const [stateLike, setStateLike] = useState();
  const [likes, setLikes] = useState();

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
          : setState("fas fa-save  savenotallowed");
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
          : setStateLike("fas fa-heart likeoff");
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
    setState("fas fa-save savenotallowed");
  };

  /*----------------Function me gusta un video-----------------*/
  const likeVideo = () => {
    const token = localStorage.getItem("token");
    if (stateLike == "far fa-heart cursorpointer") {
      fetch(process.env.BACKEND_URL + "/api/like", {
        method: "POST",
        body: JSON.stringify({ video_id: `${video.id}` }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setStateLike("fas fa-heart likeoff");
      setLikes(likes + 1);
    }
    if (stateLike == "fas fa-heart likeoff") {
      console.log("hola");
      fetch(process.env.BACKEND_URL + "/api/like/" + `${video.id}`, {
        method: "DELETE",
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + store.token, //localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Hubo un error");
          } else {
            setStateLike("far fa-heart cursorpointer");
            setLikes(likes - 1);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
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
      <div className="container-fluid">
        {video ? (
          <>
            <div className="container">
              <h2 className="colortitles mb-4 pb-2 mt-4 pt-2" id="start">
                {video.videotitle}
              </h2>
              <div className="row">
                <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.video_id}?fs=1`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    className="mi-iframe"
                  ></iframe>
                     {store.token != null && (
                    <>
                  <div className="d-flex justify-content-evenly py-2">
                  <span class="badge rounded-pill bg-primary texto1pills ps-3"><p className="d-inline align-baseline pe-2">{likes} likes</p> <i
                          className={`iconsChild ${stateLike} border-start border-white ps-3`}
                          onClick={likeVideo}
                        ></i>
                  </span>
                  <span class="dropdown badge rounded-pill bg-primary texto1pills ps-3 "><i
                          className={`iconsChild ${state} border-end border-white pe-3`}
                          onClick={seeLater}
                        ></i><p className="d-inline align-text-top ps-2">Ver más tarde</p>
                  </span>
                  
                  <span class="badge rounded-pill bg-primary texto1pills ps-3"><i className="fas fa-external-link iconsChild cursornotallowed "></i> <a
                          className="dropdown-toggle texto2pills"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Compartir
                        </a><ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="my-2 dropdown-item fab fa-telegram-plane cursorpointer"
                              href="#"
                            >
                              telegram
                            </a>
                          </li>
                          <li>
                            <a
                              className="my-2 dropdown-item fab fa-whatsapp"
                              href={`https://api.whatsapp.com/send?text=https://${window.location.hostname}/share/${params.theid}/${video.video_id}`}
                            >
                              whatsapp
                            </a>
                          </li>
                        </ul>
                  </span>
                  </div>  
                  </>)}
                  
                </div>


                
                 <div className="col-xl-4 col-lg-12 col-md-12  col-sm-12  py-1 bg-secondary bg-opacity-10 rounded-3 width overflow-auto">
                  
                {playlist.map((value, index) => {
                  return (
                    <div className="pb-4 pt-4">
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
              
                
                <div className="py-5 row espacio">
                  {store.token != null && (
                    <>
                      <div>                
                        <Coments videoid={video.id} />
                      </div>
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
                        <h3 className="textoprincipalbanner">
                          ¡No olvides iniciar sesión!
                        </h3>
                        <h4 className="textosecundariobanner">
                          Podrás crear tus propias listas de reproducción, dar a
                          me gusta a tus videos favoritos y acceder a muchas más
                          funcionalidades
                        </h4>
                        <a className="btn btn-warning btn-lg" href="/login">
                          Iniciar sesión
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-4 chico">
                      <img src={chico}></img>
                    </div>
                  </div>
                </div>
              </div>
            )}

            
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
