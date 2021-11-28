import React from 'react';
import { Link } from 'react-router-dom';

function Frame(props) {
  return (
    //Création de la carte par défaut avec un lien vers une route, une catégorie, une image et du texte
    <>
      <li className='frame-item'>
        <Link className='frame-box' to={props.path}>
            <figure className='frame-date' data-category={props.label}>
                <img className='frame-img' alt='Frame' src={props.src}/>
            </figure>
            <div className='frame-info'>
                <h5 className='frame-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  );
}

export default Frame;

