import React from 'react';
import './ApiPage.css';
import Card from './Card';
import ApiRest from './ApiRest';

function ApiPage() {
  return (
    //Affichage des cartes avec leurs parametres
    <div className='api'>
        <div className='api-container'>
            <div className='api-wrapper'>
                <ul className='api-items'>
                    <Card src='/pictures/7046.jpg' text='People in space right now' label='NATRONICS' path='/api'/>
                    <Card src='/pictures/39617.jpg' text='Pics from space' label='ASTRO DIGITAL' path='/api'/>
                </ul>
                <ul className='api-items'>
                    <Card src='/pictures/19608.jpg' text='Near-Earth Comets,  info comète' label='NASA' path='/api'/>
                    <Card src='/pictures/39619.jpg' text='Asteroid NEO..., info asteroides' label='NASA' path='/api'/>
                </ul>
                <ApiRest />
            </div>
        </div>
    </div>
  );
}

export default ApiPage;

