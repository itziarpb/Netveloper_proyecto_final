import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CarouselHtml } from "../component/carouselHtml";
import { CarouselCss } from "../component/carouselCss";
import { CarouselJs } from "../component/carouselJs";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <CarouselHtml />
      <CarouselCss />
      <CarouselJs />
    </div>
  );
};
