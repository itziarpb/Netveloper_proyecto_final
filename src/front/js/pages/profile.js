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
let inicial = String(store.dataUser.username)
  return (
    <div className="">
      {!store.token ? (
        navigate("/login")
      ) : (
        <div className="container-fluid ">
          <div className="d-flex justify-content-between flex-wrap my-5 mb-5 ">
            <div className="col-12  d-flex "> 
              <span class="circle">{inicial.charAt(0)}</span>
              <div class="d-flex flex-column align-self-center mx-4 ">
                        <h3 class="fw-normal h2 ">{store.dataUser.username}</h3>
                        <div className="titleLikes">
                        <i className="fas fa-heart heartLikes"></i> {likes} likes{" "}
                        </div>
                        <div>
                            <div class="btn btn-sm btn-outline-primary text-gray-200 py-0 px-3 fw-bold rounded-2 ">
                                  <small>
                                    {likes <=7 ? "Junior" : "Senior"} 
                                  </small>
                            </div>
                        </div>
                    </div>           
            
            </div>
          </div> 
          <div className="container row">
           
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
