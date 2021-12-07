import React from 'react';
import './StylePage.css';
import Chart from './Chart';
import Api_ISS from './API/Api_ISS';
import ApiGeo_Sun from './API/ApiGeo_Sun';
import ApiGeo_Moon from './API/ApiGeo_Moon';
import Api_PictureAncient from './API/Api_PictureAncient';
import Api_Mars from './API/Api_Mars';
import Api_Picture from './API/Api_Picture';

function DashPage() {
  return (
    //Appel des API avec leur frames
    <div className='page'>
      <div className='page-container'>
        <div className='page-wrapper'>
          <ul className='page-items'>
            <Api_ISS />
            <Api_PictureAncient />
            <Api_Picture />
          </ul>
          <ul className='page-items'>
            <ApiGeo_Sun />
            <ApiGeo_Moon />
          </ul>
          <ul className='page-chart'>
            <Api_Mars />
          </ul>
          <br/>
          <ul className='page-chart'>
            <Chart />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashPage;