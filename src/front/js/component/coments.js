import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/coments.css";

export const Coments = (props) => {
  const { store, actions } = useContext(Context);
  const [coments, setComents] = useState();
  const [comentData, setComentData] = useState();
  const [textValue, setTextValue] = useState();

  const get_coment = () => {
    fetch(process.env.BACKEND_URL + "/api/coments/" + props.videoid)
      .then((response) => {
        console.log(response.ok); // will be true if the response is successfull
        console.log(response.status); // the status code = 200 or code = 400 etc.
        return response.json();
      })
      .then((response) => {
        setComents(response);
      })
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    get_coment();
  }, [props.videoid]); //añadimos props al useEffect para que se actualice cuando cambia la props

  const handleChange = (event) => {
    setComentData({ ...comentData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/coment/" + props.videoid, {
      method: "POST",
      body: JSON.stringify(comentData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + store.token,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        get_coment();
        // setTextValue("");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row comentarios justify-content-center">
          {coments?.map((item, index) => {
            return (
              <div className="row">
                <div className="col-10">
                  <div className="fw-bold">{item.user.username}:</div>
                  <div>{item.coment}</div>
                </div>
                <div className="col-1">
                <div className="fa fa-trash"></div>
                </div>
              </div>
            );
          })}
          <form
            onSubmit={handleSubmit}
            action=""
            className="form_comentarios d-flex justify-content-end flex-wrap"
          >
            <textarea
              name="coment"
              id=""
              placeholder="Comentario"
              onChange={handleChange}
              value={textValue}
            ></textarea>
            <button className="btn" type="submit">
              Comentar
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};
