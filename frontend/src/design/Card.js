import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    //Création de la carte par défaut avec un lien vers une route, une catégorie, une image et du texte
    <>
      <li className='card-item'>
        <Link className='card-link' to={props.path}>
            <figure className='card-category' data-category={props.label}>
                <img className='card-img' alt='Card' src={props.src}/>
            </figure>
            <div className='card-info'>
                <h5 className='card-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
