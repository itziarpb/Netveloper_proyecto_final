import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/checkin.css";

import { Context } from "../store/appContext";

export const Checkin = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({});
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

  return (
    <div className="col-7 mx-auto ">
      {store.token && store.token != "" && store.token != undefined ? (
        "Ya estas registrado"
      ) : (
        <div className="container-fluid">
          <h1 className="checkinTitle">Bienvenido a la página de registro</h1>
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
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Registrarse
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
