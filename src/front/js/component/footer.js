import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("navbar");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className=" container-fluid bg-dark pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-3  maxwidth">
          <h4>ABOUT US</h4>
          <p className="footer">La mayor comunidad de programadordes de habla hispana</p>
          <p className="footer">soporte@netveloper.com</p>
          <p className="footer">+34 678-05-09-32</p>
          <br></br>
          <div className="iconosrrss">
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-vimeo"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-google-plus-square"></i>
          </div>

        </div>
        <div className="col-lg-4 col-md-3  maxwidth mb-5">
          <h4>¿CÓMO FUNCIONA?</h4>
          <p className="footer">
            Mejora tu nivel de programación enseñando a otros y lleva tu carrera
            al siguiente nivel:
          </p>
          <li className="footer">Accede a los mejores contenidos</li>
          <li className="footer">Crea tus propias listas de reproducción</li>
          <li className="footer">Interactúa con otros programadores</li>
          <li className="footer">¡Dale a me gusta a los mejores videos!</li>
        </div>
        <div className="col-lg-4  col-md-3 maxwidth footer">
          <h4>NOTICIAS RECIENTES</h4>
          <a className="footer" href="https://www.xataka.com/aplicaciones/rust-lenguaje-programacion-amado-quieres-ganar-dinero-clojure-erlang-le-superan">
            Rust es el lenguaje de programación más amado. Pero si quieres ganar
            dinero, Clojure y Erlang le superan
          </a>
          <hr></hr>
          <a className="footer" href="https://www.genbeta.com/desarrollo/imagina-poder-programar-musica-unas-pocas-lineas-javascript-eso-que-nos-ofrece-dittytoy">
            Imagina poder 'programar' música con unas pocas líneas de
            JavaScript: eso es lo que nos ofrece Dittytoy
          </a>
          <hr></hr>
          <a className="footer" href="https://www.xataka.com/robotica-e-ia/programadores-alucinaban-copilot-chatgpt-ahora-deepmind-va-alla-aplhacode">
            Los programadores ya alucinaban con CoPilot y ChatGPT, pero ahora
            DeepMind va más allá con AplhaCode
          </a>
          <hr></hr>
        </div>
      </div>

      <div className="row fondofooter pb-1 pt-4 justify-content-center d-flex">
        <p className="col-lg-2 footer">© 2023 Itziar&Jose</p>
        <div
          className="col-lg-2 cursorpointer footer"
          onClick={() => {
            handleClickScroll();
          }}
        >
          Ir arriba
        </div>
      </div>
    </footer>
  );
};
