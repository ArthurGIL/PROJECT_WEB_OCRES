import React from 'react';
import './Mozaique.css';
import Frame from './Frame';

function Mozaique() {
  return (
    //Affichage des cartes avec leurs parametres
    <div className='mozaique'>
      <div className='moza-container'>
        <div className='moza-wrapper'>
          <ul className='moza-items'>
            <Frame src='/pictures/7046.jpg' label='USER'/>
            <Frame src='/pictures/39620.jpg' label='USER'/>
            <Frame src='/pictures/39617.jpg' label='USER'/>
          </ul>
          <ul className='moza-items'>
            <Frame src='/pictures/19608.jpg' label='USER'/>
            <Frame src='/pictures/39619.jpg' label='USER'/>
          </ul>
          <ul className='moza-items'>
            <Frame src='/pictures/7046.jpg' label='USER'/>
            <Frame src='/pictures/39620.jpg' label='USER'/>
            <Frame src='/pictures/39617.jpg' label='USER'/>
          </ul>
          <ul className='moza-items'>
            <Frame src='/pictures/19608.jpg' label='USER'/>
            <Frame src='/pictures/39619.jpg' label='USER'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mozaique;
