import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ModalLater = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(process.env.BACKEND_URL + "/api/playLater/" + props.id, {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + store.token, //localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hubo un error");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handlenavigate = () => {
    navigate(`/singlevideo/${props.playlist}`);
  };

  return (
    <div
      className="modal fade"
      id={props.video_id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${props.video_id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success me-auto"
              aria-label="Close"
              data-bs-dismiss="modal"
              onClick={() => handlenavigate()}
            >
              Ir a la lista completa
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleDelete()}
              data-bs-dismiss="modal"
            >
              Eliminar de la lista
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
