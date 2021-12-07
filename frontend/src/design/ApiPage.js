import React from 'react';
import './StylePage.css';
import Card from './Card';
//import ApiRest from '../../../backend/ApiRest';

function ApiPage() {
  return (
    //Affichage des cartes avec leurs parametres
    <div className='page'>
        <div className='page-container'>
            <div className='page-wrapper'>
                <ul className='page-items'>
                    <Card src='/pictures/Neil_Armstrong.jpg' text='Neil Armstrong' label='NASA' path='/api'/>
                    <Card src='/pictures/Buzz_Aldrin.jpg' text='Buzz Aldrin' label='AIR FORCE' path='/api'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Conrad.jpg' text='Charles Conrad' label='NAVY' path='/api'/>
                    <Card src='/pictures/Alan_bean.jpg' text='Alan Bean' label='NAVY' path='/api'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Alan_Shepard.jpg' text='Alan Shepard' label='NAVY' path='/api'/>
                    <Card src='/pictures/Ed_Mitchell.jpg' text='Edgar Mitchell' label='NAVY' path='/api'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Dave_Scott.jpg' text='David Scott' label='AIR FORCE' path='/api'/>
                    <Card src='/pictures/Jim_Irwin.jpg' text='James Irwin' label='AIR FORCE' path='/api'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/John_Young.jpg' text='John Young' label='NAVY' path='/api'/>
                    <Card src='/pictures/Charles_Duke.jpg' text='Charles Duke' label='AIR FORCE' path='/api'/>
                </ul>
                <ul className='page-items'>
                    <Card src='/pictures/Cernan.jpg' text='Eugene Cernan' label='NAVY' path='/api'/>
                    <Card src='/pictures/Harrison_Schmitt.jpg' text='Harrisson Schmitt' label='NASA' path='/api'/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default ApiPage;
