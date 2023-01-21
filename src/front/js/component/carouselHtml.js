import React, { useContext, useState, useEffect } from "react";
import { Carousel } from "./carousel";

export const CarouselHtml = () => {
  return (
    <div className="container">
      <Carousel type="HTML" />
    </div>
  );
};

// Type= tipo de lenguaje en como apareceré en el titulo.
//En el componente carousel se convierte en minuscula para buscarlo en las categorias
