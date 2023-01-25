import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { PlayLater } from "../component/playLater";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);
  let count = 0;

  const getLikes = async () => {
    try {
      const resp = await fetch(process.env.BACKEND_URL + "/api/like", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await resp.json();
      setLikes(data.length);
      console.log(data.length);
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };
  useEffect(() => {
    getLikes();
  }, []);

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
          <h1 className="title text-center m-2">{store.dataUser.username}</h1>
          <h3 className="username text-center m-1">(MI PERFIL)</h3>
          <h5>Has dado likes a {likes} videos</h5>

          <div>
            <PlayLater />
          </div>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClick}
            >
              cerrar sesion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
