import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

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

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/home");

  return (
    <div className="col-7 mx-auto ">
      {store.token && store.token != "" && store.token != undefined ? (
        "Ya estas registrado"
      ) : (
        <div>
          <h1 className="checkinTitle">Bienvenido a la página de login</h1>
          <form onSubmit={handleSubmit}>
            <div className="col-sm-9 mb-3">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-9 mb-3">
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
