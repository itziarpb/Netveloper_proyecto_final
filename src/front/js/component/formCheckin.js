import React, { useState } from "react";
import { Link } from "react-router-dom";

export const FormCheckin = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value);
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
  };

  return (
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
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="modalEndRegister"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div class="modal-header">
              <h5 className="modal-title" id="modalEndRegister">
                Registro completado
              </h5>
            </div>
            <div className="modal-body">Ya puedes ingresar en tu perfil</div>
            <button
              type="button"
              className="btn btn-success modalButton"
              data-bs-dismiss="modal"
            >
              <Link to="/login">Iniciar sesion</Link>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
