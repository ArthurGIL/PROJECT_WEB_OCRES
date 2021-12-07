import React from 'react';
import './DashPage.css';
import Chart from './Chart';
import Api_ISS from './API/Api_ISS';
import ApiGeo_Sun from './API/ApiGeo_Sun';
import ApiGeo_Moon from './API/ApiGeo_Moon';
import Api_Picture from './API/Api_Picture';
import Api_Mars from './API/Api_Mars';
import Api_Rover from './API/Api_Rover';

function DashPage() {
  return (
    //Appel des API avec leur frames
    <div className='dash'>
      <div className='dash-container'>
        <div className='dash-wrapper'>
          <ul className='dash-items'>
            <Api_ISS />
            <Api_Picture />
            <Api_Rover />
          </ul>
          <ul className='dash-items'>
            <ApiGeo_Sun />
            <ApiGeo_Moon />
          </ul>
          <ul className='dash-chart'>
            <Api_Mars />
          </ul>
          <br/>
          <ul className='dash-chart'>
            <Chart />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashPage;