import React, { useContext, useState, useEffect } from "react";
import { Carousel } from "./carousel";

export const CarouselJs = () => {
  return (
    <div className="container">
      <Carousel type="JAVASCRIPT" />
    </div>
  );
};

// Type= tipo de lenguaje en como apareceré en el titulo.
//En el componente carousel se convierte en minuscula para buscarlo en las categorias
