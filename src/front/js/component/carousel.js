import React, { Component } from "react";

export const Carousel = () => {
  return (
    <div className="container">
      <h3>Hola</h3>
      <div className="scroll row ">
        <div className="d-flex">
          {/* 1 card */}
          <div className="col-12 col-sm-6 col-lg-4 me-4">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/rr2H086z16s/mqdefault.jpg" //html bluuweb
                className="card-img-top"
                height="300"
              />
              <div className="card-body">HTML y CSS Curso Completo Español</div>
            </div>
          </div>
          {/* 2 card */}
          <div className="col-12 col-sm-6 col-lg-4 me-4">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/cqMfPS8jPys/mqdefault.jpg" //html faster
                className="card-img-top"
                height="300"
              />
              <div className="card-body">Curso de HTML Básico desde 0</div>
            </div>
          </div>
          {/* 3 card */}
          <div className="col-12 col-sm-6 col-lg-4 me-4">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/24gNhTcy6pw/mqdefault.jpg" //css faster
                className="card-img-top"
                height="300"
              />
              <div className="card-body">Curso de CSS Básico desde 0</div>
            </div>
          </div>
          {/* 1 card */}
          <div className="col-12 col-sm-6 col-lg-4 me-4">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/rr2H086z16s/mqdefault.jpg" //html bluuweb
                className="card-img-top"
                height="300"
              />
              <div className="card-body">HTML y CSS Curso Completo Español</div>
            </div>
          </div>
          {/* 2 card */}
          <div className="col-12 col-sm-6 col-lg-4 me-4">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/cqMfPS8jPys/mqdefault.jpg" //html faster
                className="card-img-top"
                height="300"
              />
              <div className="card-body">Curso de HTML Básico desde 0</div>
            </div>
          </div>
          {/* 3 card */}
          <div className="col-12 col-sm-6 col-lg-4 me-4">
            <div className="card ">
              <img
                src="https://i.ytimg.com/vi/24gNhTcy6pw/mqdefault.jpg" //css faster
                className="card-img-top"
                height="300"
              />
              <div className="card-body">Curso de CSS Básico desde 0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
