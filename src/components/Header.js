import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className='header__container'>
      <div className='header__title'><h1>JON CABRE</h1></div>
      <div className='header__nav'>
        <a href='#'>Bio</a>
        <a href='#'>Skills</a>
        <a href='#'>Projects</a>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);