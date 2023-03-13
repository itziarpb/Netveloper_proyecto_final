import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/checkin.css";
import programador from "../../img/programador.jpg";
import { Context } from "../store/appContext";

export const Checkin = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState("password");
  const [iconPassword, setIconPassword] = useState("fa-eye-slash");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
    navigate("/login");
  };

  const handlePassword = () => {
    if (iconPassword == "fa-eye-slash") {
      setIconPassword("fa-eye");
      setShowPassword("text");
    }
    else if (iconPassword == "fa-eye") {
      setIconPassword("fa-eye-slash");
      setShowPassword("password");
    }
  };

  return (
    <div className="container-fluid checkin">
      {store.token && store.token != "" && store.token != undefined ? (
        "Ya estas registrado"
      ) : (
        <div className="row">
          <div className="col-12 col-md-6 px-5">
          <h1 className="checkinTitle">Registro</h1>
          <form onSubmit={handleSubmit} className="formulario">
            <div className="mb-3 row ">
              <label for="inputName" className="col-sm-2 col-form-label ">
                Usuario
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="username"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="inputEmail" className="col-sm-2 col-form-label ">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  type={showPassword}
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  onChange={handleChange}
                />
                <span
                    className={`password-icon fa fa-fw ${iconPassword}`}
                    onClick={() => handlePassword()}
                  ></span>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success buttonCheckin"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Registrarse
            </button>
          </form>
          </div>
          <div className="col-12 col-md-6 px-5">
            <img src={programador}/>
          </div>
        </div>
      )}
    </div>
  );
};
