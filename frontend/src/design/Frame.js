import React from 'react';

function Frame(props) {
  return (
    //Création de la carte par défaut avec un lien vers une route, une catégorie, une image et du texte
    <>
      <li className='img-item'>
        <div className='img-box'>
            <figure className='img-user' data-category={props.label}>
                <img className='img' alt='Card' src={props.src}/>
            </figure>
        </div>
      </li>
    </>
  );
}

export default Frame;
