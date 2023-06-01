import React, { useState } from 'react';
// import { Transition } from 'react-transition-group';
// import './Header.css';
import Logo from './assets/Color-Horizontal_S.webp';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={`flex mx-8 justify-between header ${darkMode ? 'dark' : 'light'}`}>

    <div className="m-4  logo text-xl"><img className='w-18 h-16' src={Logo}  /></div>
    <nav className="navigation">
      <ul className="flex m-4">
        <li className="m-4 cursor-pointer">Home</li>
        <li className="m-4 cursor-pointer">About</li>
        <li className="m-4 cursor-pointer">Service</li>
        <li className="m-4 cursor-pointer">Product</li>
        <li className="m-4 cursor-pointer">Team</li>
      </ul>
    </nav>
    <div className="m-8  dark-mode-toggle cursor-pointer" onClick={handleDarkModeToggle}>
      {darkMode ? 'Light' : 'Dark'} Mode
    </div>
   
  </header>
  );
};

export default Header;