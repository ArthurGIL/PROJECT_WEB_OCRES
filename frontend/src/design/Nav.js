import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  //Récupere le statut du bouton
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //Décide de l'action à effectuer lorsqu'on ouvre ou ferme le menu déroulant
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Différenciation de l'affichage petit/grand écran (on affiche les boutons lorsque l'afficge est supérieur a 960p)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Utilisation de la biblioteque React pour afficher ou non les boutons
  useEffect(() => { showButton(); }, []);

  //Appelle showbutton a chaque fois que la fenetre est resize
  window.addEventListener('resize', showButton);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
          {// Retour Home + fermeture du menu déroulant (si il existe)
          }
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='navbar-img' src='/pictures/galaxy.png' alt='Galaxapi Logo'/>
            GALAXAPI
          </Link>

          {//Utilisation de la bibliotheque font awesome pour créer les bars et la croix
          }
          <div className='menu-icon' onClick={handleClick}>
            {//Alterne entre les barres et la croix lorque l'on click dessus
            }
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {//Lorsque le menu deroulant est actif, on affiche les boutons en liste. Sinon on affiche le menu
          }
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            
            {//Affichage uniquement sur petit écrans (lorqu'on ouvre le menu)
            }
            <li>
              <Link to='/images' className='nav-links-mobile' onClick={closeMobileMenu}>
                Images
              </Link>
            </li>
          </ul>
          
          {//On assigne "IMAGES" au button par defaut grace à la balise children ainsi qu'un style de bouton
          }
          <Link to='/images' onClick={closeMobileMenu}>
            {button && <Button buttonStyle='btn--outline'>IMAGES</Button>}
          </Link>
        </div>
      </nav>
  );
}

export default Navbar;
