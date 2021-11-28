import React from 'react';
import './DashPage.css';
import Frame from './Frame';
import Chart from './Chart';

function DashPage() {
  return (
    //Affichage des frames avec leurs parametres
    <div className='dash'>
      <div className='dash-container'>
        <div className='dash-wrapper'>
          <ul className='dash-items'>
            <Frame src='/pictures/7046.jpg' text='People in space right now' label='NATRONICS' path='/dashboard'/>
            <Frame src='/pictures/39620.jpg' text='Pics from space' label='ASTRO DIGITAL' path='/dashboard'/>
            <Frame src='/pictures/19608.jpg' text='Near-Earth Comets ans Asteroids' label='NASA' path='/dashboard'/>
          </ul>
          <ul className='dash-items'>
            <Frame src='/pictures/sun3.png' text='Ipgeolocation Astronomy - SunCalc' label='INFO SPACE' path='/dashboard'/>
            <Frame src='/pictures/moon3.jpg' text='Ipgeolocation Astronomy - MoonCalc' label='INFO SPACE' path='/dashboard'/>
          </ul>
          <ul className='dash-chart'>
            <Chart />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashPage;