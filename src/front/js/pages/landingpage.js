import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landing.css";
import { Link } from "react-router-dom";
import fondo from "../../img/desarrolladores.jpg";
import logo2 from "../../img/Logo2.png";

export const Landing = () => {
  const { store, actions } = useContext(Context);
  const style = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
  };

  return (
    <div className="container-fluid landing" style={style}>
      <div className="row justify-content-center">
        <div className="block col-11 col-sm-9 col-md-9 col-lg-8 ">
          <div className="row d-flex justify-content-center">
            <div className="p-0">
              <img src={logo2} className="w-100 logo2" />
            </div>
            <div>
              <h2 className="slogan text-center">
                Una página para aprender a programar
              </h2>
            </div>
            <div>
              <h3 className="sloganText text-center">
                Aquí podrás encontrar los mejores tutoriales de youtube en cada
                lenguaje de programación
              </h3>
            </div>
            <div className="d-flex justify-content-center m-2">
              <button className="btn allbutton">
                <Link to="/home" className="link">
                  Ir a la página
                </Link>
              </button>
            </div>
            <div>
              <h5 className="sloganText text-center">
                Inicia sesión para interactuar con otros programadores
              </h5>
            </div>
            <div className="row m-2 d-flex justify-content-center col-11 col-sm-9">
              <div className="d-flex justify-content-center col-11 col-sm-5">
                <button type="button" className="btn allbutton">
                  <Link to="/login" className="link">
                    Inicio Sesión
                  </Link>
                </button>
              </div>
              <div className="d-flex justify-content-center col-11 col-sm-5">
                <button type="button" className="btn allbutton">
                  <Link to="/checkin" className="link">
                    Registrarse
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
