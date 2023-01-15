import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card cardCarousel col-12 col-sm-6 col-lg-3 me-2">
      <Link to={`/singlevideo/${props.id}`}>
        <img src={props.url} className="card-img-top" />
      </Link>
      <div className="card-body">{props.title}</div>
    </div>
  );
};
