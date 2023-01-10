import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
  const { actions } = useContext(Context);

  const [id1, setId1] = useState([]);
  const [id2, setId2] = useState([]);
  const [id3, setId3] = useState([]);

  const [img, setImg] = useState([]);
  const [img2, setImg2] = useState([]);
  const [img3, setImg3] = useState([]);

  
/*---------------------------------------------------------------*/  
/* Llamadas a la api para obtener los ID de cada canal de youtube*/
/*---------------------------------------------------------------*/

  /*Canal de nategentile7*/

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=nategentile7&key=AIzaSyCLGNOAdPMC9vfdOzhZyOMMuO4OBOtvXZA`
    )
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setId1(response.items[0].id.channelId);
        console.log(response.items[0].id.channelId);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  /*Canal de midudev*/

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=midudev&key=AIzaSyAEQjzh7hO7gU5VkQ0iahdTXNTIpLiaQ7Q`
    )
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setId2(response.items[0].id.channelId);
        
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  /*Canal de holamundo*/

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=holamundo&key=AIzaSyAEQjzh7hO7gU5VkQ0iahdTXNTIpLiaQ7Q`
    )
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })

      .then((response) => {
        setId3(response.items[0].id.channelId);
        
      })
      .catch((error) => console.error("Error:", error));
  }, []);

/*---------------------------------------------------------------*/  
/*Llamadas a la api para obtener el channelbanner de cada canal*/
/*---------------------------------------------------------------*/

/*ChannelBaner de nategentile7*/

  


  let extension = img3+`=w1920`
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
              src={id1} className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src={id2}
              className="d-block w-100 clasejumbotron"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src={extension}
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
