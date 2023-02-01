import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

/*export const Jumbotron = () => {
  const { actions } = useContext(Context);

  const [id1, setId1] = useState();
  const [id2, setId2] = useState();
  const [id3, setId3] = useState();

  /*---------------------------------------------------------------*/
  /* Llamada al backend para listar el array con los elementos de la tabla Channel*/
  /*---------------------------------------------------------------*/

 /* useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/channel")
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

/*Solo nos quedamos con los elementos del array necesarios
      .then((response) => {
        setId1(response[0].channelbanner)
        setId2(response[1].channelbanner)
        setId3(response[2].channelbanner)
        
       
      })
      .catch((error) => console.error("Error:", error));
  }, []);

 /*Mejora de la resolución previa al className
  let extension1 = id1 + `=w1920`;
  let extension2 = id2 + `=w1920`;
  let extension3 = id3 + `=w1920`;

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={extension1}
              className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src={extension2}
              className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src={extension3}
              className="d-block w-100 clasejumbotron"
              alt="..."
            ></img>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};*/
