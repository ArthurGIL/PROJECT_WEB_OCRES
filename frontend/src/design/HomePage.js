import React from 'react';
import '../App.css';
import './HomePage.css';

function HomePage() {
  return (
    //creation de la banniere d'acceuil en "hero" (image/video en plein ecran avec texte)
    <div className='hero-container'>
      <video src='/pictures/video.mp4' autoPlay loop muted />
      <h1>GALAXAPI</h1>
      <p>Arthur Gil - Callixte Fusier</p>
    </div>
  );
}

export default HomePage;
