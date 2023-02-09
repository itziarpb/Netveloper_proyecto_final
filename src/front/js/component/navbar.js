import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../../img/Logo2.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    actions.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" id="navbar">

      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={logo2}  widht="120" height="60" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {store.token != null && (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Mi Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/home" onClick={handleClick} className="nav-link">
                    Cerrar sesion
                  </Link>
                </li>
              </>
            )}
            {store.token == null && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Iniciar sesión
                </Link>
              </li>
            )}

            {/* <li className="nav-item">
              <Link to="/setting" className="nav-link">
                Ajustes
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};
