import React, { useState, useEffect, useContext } from "react";


export const ModalContact =()=>{
const [formData, setFormData] = useState({});
const handleChange = (event) => {
        setFormData({ ...formData, [event.target.type]: event.target.value });
        console.log(event.target.name)
      };

const handleSubmit = (event) => {
        
        fetch(process.env.BACKEND_URL + "/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
        navigate("/home");
      };

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
                                    <form onSubmit={handleSubmit} className="row g-3" >
                                        <div className="col-12">
                                            <label for="inputEmail4" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" onChange={handleChange} ></input>
                                        </div>
                                        
                                        <div className="col-12">
                                            <label for="inputComment" className="form-label">Comentario</label>
                                            <textarea  type="text" className="form-control" id="inputComment"  onChange={handleChange} placeholder=""></textarea >
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