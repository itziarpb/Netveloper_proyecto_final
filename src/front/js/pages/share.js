import React, { } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/singlevideo.css"

export const Share = () => {

  const params = useParams();
  
  
   return (
  <>
    <div className="container">
    <h1 className="colortitles pb-4 pt-4">{params.title}</h1>
    <div className="ratio ratio-16x9">
                    <iframe src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
    </div>
   </>
  );
};