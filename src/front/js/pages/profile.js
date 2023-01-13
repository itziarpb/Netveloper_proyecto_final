import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    actions.logout();
    navigate("/");
  };
  return (
    <div className="container">
      <h3>usuario</h3>
      <button onClick={handleClick}>cerrar sesion</button>
    </div>
  );
};
