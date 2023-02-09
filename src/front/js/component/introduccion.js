import React, { Component } from "react";
import "../../styles/intro.css"

export const Intro = () =>{

return(
    <>
    <div className="container-fluid pt-5 mt-5">
        <div className="row bg-white features-icons text-center">
            
            <div className="cuerpo col-lg-4">
                <div className="icono">
                    <i className="fab fa-telegram-plane cursorpointer"></i>
                </div>
                <div className="titulo">
                    <h2>Aprende</h2>
                </div>
                <div className="texto">
                    <p>Accede a los mejores contenidos para aprender o sube tus propios videos para enseñar</p>
                </div>        
             </div>

             <div className="cuerpo col-lg-4">
                <div className="icono">
                    <i className="fab fa-telegram-plane cursorpointer"></i>
                </div>
                <div className="titulo">
                     <h2>Enseña</h2>
                </div>
                <div className="texto">
                    <p>Accede a los mejores contenidos para aprender o sube tus propios videos para enseñar</p>
                </div>        
             </div>

             <div className="cuerpo col-lg-4">
                <div className="icono">
                    <i className="fab fa-telegram-plane cursorpointer"></i>
                </div>
                <div className="titulo">
                    <h2>Interactúa</h2>
                </div>
                <div className="texto">
                    <p>Accede a los mejores contenidos para aprender o sube tus propios videos para enseñar</p>
                </div>        
             </div>


        </div>


    </div>


    </>
    )
}