import React from 'react';
import './DashPage.css';
import Card from './Card';
import Chart from './Chart';

function DashPage() {
  return (
    //Affichage des cartes avec leurs parametres
    <div className='dash'>
        <div className='dash-container'>
            <div className='dash-wrapper'>
                <ul className='dash-items'>
                    <Card src='/pictures/7046.jpg' text='People in space right now' label='NATRONICS' path='/dashboard'/>
                    <Card src='/pictures/39617.jpg' text='Pics from space' label='ASTRO DIGITAL' path='/dashboard'/>
                </ul>
                <ul className='dash-items'>
                    <Card src='/pictures/19608.jpg' text='Near-Earth Comets,  info comète' label='NASA' path='/dashboard'/>
                    <Card src='/pictures/39619.jpg' text='Asteroid NEO..., info asteroides' label='NASA' path='/dashboard'/>
                </ul>
            </div>
        </div> 
        <ul className='dash-chart'>
            <Chart />
        </ul>
    </div>
  );
}

export default DashPage;
