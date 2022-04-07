import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import {DarkModeContext} from '../context/DarkModeContext';
import  {useContext} from 'react';


export const NavBar = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  const handleClick = () => {
      toggleDarkMode();
  }
  return (
  <div className={darkMode ? `Navbar Navbar-dark` : `Navbar Navbar-light`}>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        ISIS3710
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/gallery'>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact-form'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <img className='dm-img' src={darkMode ? 
            '/images/lightswitch-off.png' : './images/lightswitch-on.png'} alt="Lightswitch on" onClick={handleClick}/>          
     </nav>
    </div>
  );
};
