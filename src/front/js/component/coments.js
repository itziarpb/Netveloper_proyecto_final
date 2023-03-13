import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ComentModal } from "./comentsModal";
import "../../styles/coments.css";

export const Coments = (props) => {
  const { store, actions } = useContext(Context);
  const [coments, setComents] = useState();
  const [comentData, setComentData] = useState(``);
  const [textValue, setTextValue] = useState();
  const [inputValue, setInputValue] = useState("");

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
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
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
      });
  };
  const handleEdit = (id) => {
    fetch(process.env.BACKEND_URL + "/api/newcoment/" + id, {
      method: "PUT",
      body: JSON.stringify(),
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + store.token, //localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        get_coment();
      });
  };

  const handleDelete = (id) => {
    fetch(process.env.BACKEND_URL + "/api/coment/" + id, {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + store.token, //localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hubo un error");
        } else {
          setComents((prev) => prev.filter((com) => com.id != id));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row comentarios justify-content-center">
          {coments?.map((item, index) => {
            return (
              <div className="row">
                <div className="col-11 py-3 border-bottom border-light">
                  <div className="fw-bold">{item.user.username}:</div>
                  <div>{item.coment}</div>
                </div>
                {store.dataUser.username == item.user.username && (

                  <div className="col-1 align-bottom d-inline ">
                    <p
                      // className="fa fa-trash align-bottom d-inline "
                      onClick={() => handleDelete(item.id)}
                    >x</p>
                  </div>
                )}
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
              value={inputValue}
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
