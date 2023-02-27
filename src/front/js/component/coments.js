import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/coments.css";

export const Coments = (props) => {
  const { store, actions } = useContext(Context);
  const [coments, setComents] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/coments/" + props.videoid)
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })
      .then((response) => {
        setComents(response);
        console.log("comentarios response", response);
        console.log("id video", props.videoid )
      })
      .catch((error) => console.error("Error:", error));
      console.log("comentarios en coments",coments)
  }, []);


  return (
    <>
      <div className="container">
        <div className="row comentarios justify-content-center">
          {coments?.map((item, index) => {
            return (
              <div>
                <div>{props.videoid}</div>
                <div>Usuario: {item.user.username}</div>
                <div>Comentario: {item.coment}</div>
              </div>
            );
          })}
          <form
            action=""
            className="form_comentarios d-flex justify-content-end flex-wrap"
          >
            <textarea name="" id="" placeholder="Comentario"></textarea>
            <button className="btn" type="button">
              Comentar
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};
