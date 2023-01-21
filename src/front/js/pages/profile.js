import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { PlayLater } from "../component/playLater";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  let numberlikes = 0;
  if (store.dataUser.id) {
    const myLikes = store.likes.filter(
      (list) => list.user_id == store.dataUser.id
    );
    numberlikes = myLikes.length;
  }

  const handleClick = () => {
    actions.logout();
    navigate("/");
  };
  return (
    <div className="container">
      {!store.token ? (
        <div>
          <h1>No has iniciado sesion</h1>
          <div>
            <Link to="/login">Inicio Sesión</Link>
          </div>
        </div>
      ) : (
        <div className="container">
          <h3>Usuario: {store.dataUser.username}</h3>
          <h3>Has dado likes a {numberlikes} videos</h3>

          <div>
            <PlayLater />
          </div>
          <button onClick={handleClick}>cerrar sesion</button>
        </div>
      )}
    </div>
  );
};
