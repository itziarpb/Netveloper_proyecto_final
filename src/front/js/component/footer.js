import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
<footer className=" footer container-fluid">
  <div className="row fondo2 pb-5 pt-4 ">
    <div className="col-lg-3 ml-3  maxwidth">
      <h4>ABOUT US</h4>
      <p>Phasellus mattis felis quis enim viverratys accumsan. Nullam porta risus felis, vitaeuik dapibus arcu viverra eu.</p>
      <br></br>
      <p>We Are Social On</p>
      <div className="icons2">
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-vimeo"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-google-plus-square"></i>
      </div>
    </div>
    <div className="col-lg-3 maxwidth">
      <h4>¿CÓMO FUNCIONA?</h4>
      <p>Phasellus mattis felis quis enim viverratys accumsan. Nullam porta risus felis, vitaeuik dapibus arcu viverra eu.</p>
      <br></br>
      <li>Phasellus mattis felis quis enim</li>
      <li>Nullam porta risus vitaeuik dapibus</li>
      <li>Phasellus mattis felis quis enim</li>
      <li>Vivamus sit amet ligulague semper</li>
        
    </div>
    <div className="col-lg-3 maxwidth">
      <h4>NOTICIAS RECIENTES</h4>
      <p>Standred post with featured image by Mike Doe on June 24, 2014</p>
      <hr></hr>
      <p>Standred post with featured image by Mike Doe on June 24, 2014</p>
      <hr></hr>
      <p>Standred post with featured image by Mike Doe on June 24, 2014</p>
      <hr></hr>
    </div>
    <div className="col-lg-3 maxwidth">
      <h4>ACEPTAMOS</h4>
      <p>Phasellus mattis felis quis enim viverratys accumsan. Nullam porta risus felis, vitaeuik dapibus arcu viverra eu.</p>
    </div>
  </div>
  </footer>
);
