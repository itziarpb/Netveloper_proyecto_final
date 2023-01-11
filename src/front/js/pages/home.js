import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron";
import { CarouselHtml } from "../component/carouselHtml";
import { CarouselCss } from "../component/carouselCss";
import { CarouselJs } from "../component/carouselJs";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <Jumbotron/>
      <CarouselHtml />
      <CarouselCss />
      <CarouselJs />

    </div>
  );
};
