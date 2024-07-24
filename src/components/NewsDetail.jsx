import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

function NewsDetail({ indice, newsFeed, goBack }) {
  return (
    <>
        <div>
            <button onClick={() => goBack(-1)}><FontAwesomeIcon icon={faRotateLeft} /></button>
            <h1>{newsFeed[indice].titulo}</h1>
            <img src={newsFeed[indice].urlImagen} alt="imagen del articulo" width="100%" height="650px" />
            <p>{newsFeed[indice].descripcion}</p>
            <p>{newsFeed[indice].autor}</p>
            <p>{newsFeed[indice].fecha}</p>
            <p>{newsFeed[indice].categoria}</p>
        </div>
    </>
  )
}

export default NewsDetail;
