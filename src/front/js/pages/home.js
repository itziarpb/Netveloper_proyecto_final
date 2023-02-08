import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron";
import { CarouselHtml } from "../component/carouselHtml";
import { CarouselCss } from "../component/carouselCss";
import { CarouselJs } from "../component/carouselJs";
import "../../styles/home.css"
import { ModalContact } from "../component/modalcontacto";
import { Intro } from "../component/introduccion";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid fondo">
      
      <Jumbotron/>
      
      <div className="container-fluid bg-dark mt-5 pt-4 pb-4 banner1">
            <div className="d-flex justify-content-center"><p>¿Te gustaría subir tu contenido para ponerte a prueba?</p></div>
            <div className="d-flex justify-content-center"><button type="button" className="btn fondoboton d-flex justify-content-center"data-bs-toggle="modal" data-bs-target="#exampleModal">Contacta con nosotros</button></div>
            </div>
            <ModalContact/>
      <div className="fondovideos mt-5 pt-3 mb-5 pb-5">
      <CarouselHtml />
      <CarouselCss />
      <CarouselJs />
      </div>
      
      

    </div>
  );
};
