import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Button({ type, deleteFunction, indice }) {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }

  let customClass;
  let customIcon;
  let buttonText;
  let customFunction;
  
  // if(type === "like") {
  //   customClass = "btn btn-success btn-lg";
  //   buttonText = "Me gusta";
  // } else {
  //   customClass = "btn btn-danger btn-lg";
  //   buttonText = "No me gusta";
  // }

  switch (type) {
    case "like":
      customClass = "btn btn-success btn-lg";
      customIcon = faThumbsUp;
      buttonText = likes;
      customFunction = handleClick;
      break;
    case "dislike":
      customClass = "btn btn-secondary btn-lg";
      customIcon = faThumbsDown;
      buttonText = likes;
      customFunction = handleClick;
      break;
    case "delete":
      customClass = "btn btn-danger btn-lg";
      customIcon = faTrash;
      customFunction = () => deleteFunction(indice);
      break;
    default:
      customClass = "btn btn-primary btn-lg";
      buttonText = "Boton";
  }

  return (
    <button className={customClass} onClick={customFunction}><FontAwesomeIcon icon={customIcon} /> {buttonText}</button>
  )
}
