import React from 'react';
import Logo from './images/logo.png';
import styles from './styles.css';

const iconsUrl = 'https://github.com/SphereSoftware/rebel-icons/';

export default function Header() {
  return (
    <header className="heavy-border-top">
      <div className={ styles.forkRibbonContainer }>
        <a
          href={iconsUrl}
          className={ `${styles.forkRibbon} text-center` }
        >
          Fork it on GitHub
        </a>
      </div>
      <div className="container">
        <div className="layout horizontal center-center mb-40">
          <img src={ Logo } alt="logo" className={ styles.logo } />
        </div>
      </div>
    </header>
  );
}
