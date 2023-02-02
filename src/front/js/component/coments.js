import React, { } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/coments.css"

export const Coments = () => {

    return (
        <>
    <div className="container">
        <div className="row comentarios justify-content-center">
            <form action= "" className="form_comentarios d-flex justify-content-end flex-wrap">
                <textarea name="" id="" placeholder="Comentario"></textarea>
                 <button className="btn" type="button">Comentar</button>
            </form>
            <div></div>
        </div>
    </div>
    </>
  );
};