import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
  
  const { actions } = useContext(Context);
 
  /*---------------------------------------------------------------*/
  /* Llamada a la api desde backend para obtener "Channels"*/
  /*---------------------------------------------------------------*/


  useEffect(() => {
    fetch(
      `https://3001-itziarpb-netveloperproy-q4dtm8vhll4.ws-eu82.gitpod.io/api/channel`
    )
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        console.log(response)
       
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  
  /*Mejora de la resolución previa al className*/
  let extension1 = img + `=w1920`;
  let extension2 = img2 + `=w1920`;
  let extension3 = img3 + `=w1920`;

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
              src="https://i.blogs.es/5ff5c1/hello_world/1366_2000.jpg"
              className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.blogs.es/5ff5c1/hello_world/1366_2000.jpg"
              className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.blogs.es/5ff5c1/hello_world/1366_2000.jpg"
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
};
