import React from 'react';
import './DashPage.css';
import Frame from './Frame';
import Chart from './Chart';
import Api_ISS from '../API_Test/API/Api_ISS';
import ApiGeo_Sun from '../API_Test/API/ApiGeo_Sun';
import ApiGeo_Moon from '../API_Test/API/ApiGeo_Moon';
import Api_Picture from '../API_Test/API/Api_Picture';

function DashPage() {
  return (
    //Affichage des frames avec leurs parametres
    <div className='dash'>
      <div className='dash-container'>
        <div className='dash-wrapper'>
          <ul className='dash-items'>
            <Api_ISS/>
            <Api_Picture />
            <Frame src='/pictures/19608.jpg' text='Near-Earth Comets ans Asteroids' label='NASA' path='/dashboard'/>
          </ul>
          <ul className='dash-items'>
            <ApiGeo_Sun />
            <ApiGeo_Moon />
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