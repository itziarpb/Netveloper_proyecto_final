import React, { Component } from "react";
import { Card } from "./card";

export const CarouselCss = () => {
  const cssImagenes = [
    {
      title: "Curso de CSS Básico desde 0",
      url: "https://i.ytimg.com/vi/24gNhTcy6pw/mqdefault.jpg",
      channel: "FalconMaster",
    },
    { title: "", url: "" },
    { title: "", url: "" },
    { title: "", url: "" },
  ];

  return (
    <div className="container">
      <h3 className="titleCarousel">CSS</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {cssImagenes.map((cssImagenes, index) => (
            <Card title={cssImagenes.title} url={cssImagenes.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
