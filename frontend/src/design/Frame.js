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
                <h4 className='frame-text'>{props.text}</h4>
                <h8 className='frame-subtext'>{props.content1}</h8>
                <br/>
                <h8 className='frame-subtext'>{props.content2}</h8>
            </div>
        </Link>
      </li>
    </>
  );
}

export default Frame;

