import React from 'react';
import './DashPage.css';
import Card from './Card';

function DashPage() {
  return (
    //
    <div className='dash'>
      <div className='dash-container'>
        <div className='dash-wrapper'>
          <ul className='dash-items'>
            <Card src='/pictures/39620.jpg' text='People in space right now,  Natronics' label='Space de la mort' path='/dashboard'/>
            <Card src='/pictures/39620.jpg' text='Ipgeolocation Astronomy, info space == MoonCalc + SunCalc' label='Space' path='/dashboard'/>
          </ul>
          <ul className='dash-items'>
            <Card src='/pictures/39620.jpg' text='NASA Near-Earth Comets,  info comète' label='Space de la mort' path='/dashboard'/>
            <Card src='/pictures/39620.jpg' text='NASA Asteroid NEO ... , asterois info' label='Space' path='/dashboard'/>
          </ul>
          <ul className='dash-items'>
            <Card src='/pictures/39620.jpg' text='Astro Digital API, pics from space' label='Space de la mort' path='/dashboard'/>
            <Card src='/pictures/39620.jpg' text='Les dernières images de Twitter #Space' label='Space' path='/images'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashPage;
