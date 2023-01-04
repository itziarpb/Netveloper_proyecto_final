import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FormCheckin } from "../component/formCheckin";
import "../../styles/checkin.css";

import { Context } from "../store/appContext";

export const Checkin = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col-7 mx-auto ">
      <h1 className="checkinTitle">Bienvenido a la página de registro</h1>
      <FormCheckin />
    </div>
  );
};
