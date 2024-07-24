import React from 'react'
import Button from '../ui/Button.jsx';

export default function Article({ articulo, deleteFunction, indice, showDetail }) {
  return (
    <div className="col-xxl-12 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={articulo.urlImagen} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="500px" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{articulo.titulo}</h1>
        <p className="lead">{articulo.descripcion}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" onClick= {() => showDetail(indice)} className="btn btn-primary btn-lg px-4 me-md-2">{articulo.textoBoton}</button>
          <Button 
            type={"like"}
          />
          <Button 
            type={"dislike"}
          />
          <Button 
            type={"delete"}
            deleteFunction={deleteFunction}
            indice={indice}
          />
        </div>
      </div>
    </div>
  </div>
  )
}
