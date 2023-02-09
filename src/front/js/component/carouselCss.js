import React, { useContext, useState, useEffect } from "react";
import { Carousel } from "./carousel";

export const CarouselCss = () => {

  return (
    <div className="container">
      <Carousel type="CSS" />
    </div>
  );
};

// Type= tipo de lenguaje en como apareceré en el titulo.
//En el componente carousel, el type se convierte en minuscula para buscarlo en las categorias
