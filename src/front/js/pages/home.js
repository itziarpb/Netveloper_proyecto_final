import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <Jumbotron/>
      
    </div>
  );
};
