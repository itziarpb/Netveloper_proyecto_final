import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import portatil from "../../img/portatil 2.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [loginData, setLoginData] = useState({});
  const [showPassword, setShowPassword] = useState("password");
  const [iconPassword, setIconPassword] = useState("fa-eye");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.login(loginData.email, loginData.password);
  };

  const handlePassword = () => {
    if (iconPassword == "fa-eye") {
      setIconPassword("fa-eye-slash");
      setShowPassword("text");
    }
    else if (iconPassword == "fa-eye-slash") {
      setIconPassword("fa-eye");
      setShowPassword("password");
    }
  };

  //if ((store.dataUser.msg = "Token has expired")) actions.logout();

  return (
    <div className="container-fluid login">
      <div className="container py-2">
        {store.token && store.token != "" && store.token != undefined ? (
          //"Ya estas registrado"
          navigate("/home")
        ) : (
          <div className="row">
            <div className="col-12 col-md-6 px-5">
              <img src={portatil} />
            </div>
            <div className="col-12 col-md-6 px-5">
              <h1 className="loginTitle">Inicio de Sesión</h1>
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
                    type={showPassword}
                    className="form-control"
                    id="inputPassword"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                  />
                  <span
                    className={`password-icon fa fa-fw ${iconPassword}`}
                    onClick={() => handlePassword()}
                  ></span>
                </div>
                <button type="submit" className="btn btn-success buttonLogin">
                  Iniciar sesión
                </button>
              </form>
              <div className="text-center">
                <Link to="/checkin" className="link">
                  ¿Aún no estás registrado?
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
