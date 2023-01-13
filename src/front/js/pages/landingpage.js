import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Landing = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div>
        <Link to="/checkin">Registro</Link>
      </div>
      <div>
        <Link to="/login">Inicio Sesión</Link>
      </div>
      <div>
        <Link to="/home">Entrar sin registrarse</Link>
      </div>
    </div>
  );
};
