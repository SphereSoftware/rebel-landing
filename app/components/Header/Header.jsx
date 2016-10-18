import React from 'react';
import { Link } from 'react-router';
import Logo from './images/logo.png';
import styles from './styles.css';

export default function Header() {
  return (
    <header className="heavy-border-top">
      <a href="#" className={ `${styles.forkRibbon} text-center` }>Fork it on GitHub</a>
      <div className="container">
        <Link to="/" className="layout horizontal center-center mb-40">
          <img src={ Logo } alt="logo" className={ styles.logo }/>
        </Link>
      </div>
    </header>
  );
}
