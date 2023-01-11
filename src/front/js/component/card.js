import React, { Component } from "react";

export const Card = (props) => (
  <div className="card cardCarousel col-12 col-sm-6 col-lg-3 me-2">
    <img src={props.url} className="card-img-top" />
    <div className="card-body">{props.title}</div>
  </div>
);
