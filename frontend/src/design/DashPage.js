import React from 'react';
import './DashPage.css';
import Card from './Card';

function DashPage() {
  return (
    //Affichage des cartes avec leurs parametres
    <div className='dash'>
      <div className='dash-container'>
        <div className='dash-wrapper'>
          <ul className='dash-items'>
            <Card src='/pictures/7046.jpg' text='People in space right now' label='Natronics' path='/dashboard'/>
            <Card src='/pictures/39620.jpg' text='Ipgeolocation Astronomy == MoonCalc + SunCalc' label='INFO SPACE' path='/dashboard'/>
            <Card src='/pictures/39617.jpg' text='Pics from space' label='Astro Digital' path='/dashboard'/>
          </ul>
          <ul className='dash-items'>
            <Card src='/pictures/19608.jpg' text='Near-Earth Comets,  info comète' label='NASA' path='/dashboard'/>
            <Card src='/pictures/39619.jpg' text='Asteroid NEO..., info asteroides' label='NASA' path='/dashboard'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashPage;
