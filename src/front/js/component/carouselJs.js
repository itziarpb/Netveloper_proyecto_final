import React, { Component } from "react";
import { Card } from "./card";

export const CarouselJs = () => {
  const jsImagenes = [
    {
      title: "Curso Básico de Javascript desde 0",
      url: "https://i.ytimg.com/vi/xnWtGNiG2lg/mqdefault.jpg",
      channel: "FalconMaster",
    },
    { title: "", url: "" },
    { title: "", url: "" },
    { title: "", url: "" },
  ];

  return (
    <div className="container">
      <h3 className="titleCarousel">JAVASCRIPT</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {jsImagenes.map((jsImagenes, index) => (
            <Card title={jsImagenes.title} url={jsImagenes.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
