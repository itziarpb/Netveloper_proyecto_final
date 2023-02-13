import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import imgperfil from "../../img/imgperfil.jpg"
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

  return (
    <div className="">
      {!store.token ? (
        navigate("/login")
      ) : (
        <div className="container-fluid">
          {/* <div className="text-center userTitle mt-4 ms-auto">
            <h2>Mi perfil</h2>
            <h1 className="">{store.dataUser.username}</h1>
          </div>  */}
          <div className="container row">
            <div className="col-12 ">
              <h5 className="titleLikes">
                <i className="fas fa-heart heartLikes"></i> {likes} likes{" "}
              </h5>
              {/* {likes === 0 ? (
              <div className="textProfile">Aún no hay likes</div>
            ) : (
              <div className="textProfile">{likes} videos</div>
            )} */}
            </div>

            <div className="col-12">
              <div>
                <PlayLater />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
