import React, { Component } from "react";
import { Card } from "./card";

export const CarouselHtml = () => {
  const htmlImagenes = [
    {
      title: "Curso de HTML Básico desde 0",
      url: "https://i.ytimg.com/vi/cqMfPS8jPys/mqdefault.jpg",
      channel: "FalconMaster",
    },
    { title: "", url: "" },
    { title: "", url: "" },
    { title: "", url: "" },
  ];

  return (
    <div className="container">
      <h3 className="titleCarousel">HTML</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {htmlImagenes.map((htmlImagenes, index) => (
            <Card title={htmlImagenes.title} url={htmlImagenes.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
