import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Button = (props) => {

  /*const [changeId, setChangeId] = useState();*/
  const change = (index) =>{
    console.log(props.index)
  }

  return (
    <>
      <button type="button" className="btn btn-success" onClick={change}>{props.id}</button>
    </>
  );
};
