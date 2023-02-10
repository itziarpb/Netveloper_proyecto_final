import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landing.css";
import { Link } from "react-router-dom";
import fondo from "../../img/black.png";


export const Landing = () => {
  const { store, actions } = useContext(Context);
  const style = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
  };

  return (
    <div className="container-fluid landing py-5" style={style}>
      <div className="row">
        <div className="block col-11 col-sm-9 col-md-9 col-lg-8 pb-5">
          <div className="row d-flex justify-content-center">
            
            <div>
              <h2 className="slogan py-3">
                Una página para  enseñar y aprender programación
              </h2>
            </div>
          
           
            <div>
              <h5 className="sloganText py-3">
                Regístrate o inicia sesión para interactuar con otros programadores. Tambień puedes <a className="text-warning" href="/home">explorar</a> antes la web
              </h5>
            </div>
            <div className="row m-2 d-flex  col-11 col-sm-9">
              <div className="d-flex justify-content-center col-11 col-sm-5">
                <button type="button" className="btn btn-lg allbutton">
                  <Link to="/login" className="">
                    Inicio Sesión
                  </Link>
                </button>
              </div>
              <div className="d-flex justify-content-center col-11 col-sm-5">
                <button type="button" className="btn btn-lg allbutton">
                  <Link to="/checkin" className="">
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
