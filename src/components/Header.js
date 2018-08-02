import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ startLogout }) => (
  <header className="header">
    <div className='header__container'>
      <div className='header__title'><h1>JON CABRE</h1></div>
      <div className='header__nav'>
        <a href='#bio'>Bio</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
      </div>
    </div>
  </header>
);


export default Header;
