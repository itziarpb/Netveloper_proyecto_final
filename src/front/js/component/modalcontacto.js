import React from "react";


export const ModalContact =()=>{


    return(
        <>
           
        
    <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content ">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Déjanos tu comentario</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div className="modal-body">
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label for="inputEmail4" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4"></input>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputPassword4" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4"></input>
                                        </div>
                                        <div className="col-12">
                                            <label for="inputComment" className="form-label">Comentario</label>
                                            <textarea  type="text" className="form-control" id="inputComment" placeholder=""></textarea >
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-light">Enviar</button>
                                        </div>
                                    </form>
                </div>
                
            </div>
        </div>
    
    </div>             
    </>
  );
};