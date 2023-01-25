import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/checkin.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    actions.login(loginData.email, loginData.password);
  };

  //if ((store.dataUser.msg = "Token has expired")) actions.logout();

  return (
    <div className="col-7 mx-auto ">
      {store.token && store.token != "" && store.token != undefined ? (
        //"Ya estas registrado"
        navigate("/home")
      ) : (
        <div className="mx-5">
          <h1 className="checkinTitle">Bienvenido a la página de login</h1>
          <form onSubmit={handleSubmit} className="formulario">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Iniciar sesión
            </button>
          </form>
          <Link to="/checkin">¿Aún no estás registrado?</Link>
        </div>
      )}
    </div>
  );
};
