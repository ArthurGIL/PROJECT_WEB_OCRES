import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//tableau de style de bouton par defaut
const STYLES = ['btn--primary', 'btn--outline'];

//tableau de taille de bouton par defaut
const SIZES = ['btn--medium', 'btn--large'];

//children est la valeur qu'on veut passer au bouton
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  //Si le bouton a un style, on lui adresse, sinon on lui assigne un style par défaut
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  //Si le bouton a une taille particuliere, on la lui met, sinon on lui assigne une taille par défaut
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  //Création 
  return (
    <Link to='/images' className='btn-mobile'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};
