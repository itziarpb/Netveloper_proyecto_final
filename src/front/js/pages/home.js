import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/carousel";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Carousel />
    </div>
  );
};
