import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
  const { actions } = useContext(Context);

  const [channelActive, setChannelActive] = useState([]);
  const [channel, setChannel] = useState([]);

  /*---------------------------------------------------------------*/
  /* Llamada al backend para listar el array con los elementos de la tabla Channel*/
  /*---------------------------------------------------------------*/

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/channel")
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      /*Solo nos quedamos con los elementos del array necesarios*/
      .then((response) => {
        for (var i = 0; i < response.length; i++) {
          console.log(response[i].channeltitle);
          if (response[i].channeltitle === "yacklyon") {
            setChannelActive(response[i]);
          }
          if (response[i].channeltitle === "Fazt") {
            setChannel((channel) => [...channel, response[i]]);
          }
          if (response[i].channeltitle === "pildorasinformaticas") {
            setChannel((channel) => [...channel, response[i]]);
          }
          if (response[i].channeltitle === "FalconMasters") {
            setChannel((channel) => [...channel, response[i]]);
          }
          if (response[i].channeltitle === "Carlos Alfaro") {
            setChannel((channel) => [...channel, response[i]]);
          }
          if (response[i].channeltitle === "TodoCode") {
            setChannel((channel) => [...channel, response[i]]);
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

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

          {channel.slice(1).map((value, index) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index + 1}
                aria-label="Slide 2"
              ></button>
            );
          })}
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={channelActive.channelbanner + `=w1920`}
              className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          {channel.slice(1).map((value, index) => {
            return (
              <div className="carousel-item">
                <img
                  src={value.channelbanner + `=w1920`}
                  className="d-block w-100 clasejumbotron"
                ></img>
              </div>
            );
          })}
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
