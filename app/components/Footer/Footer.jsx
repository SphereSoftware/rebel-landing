import React, { Component } from 'react'
import { Link } from 'react-router';
import { SocialButtonsSet } from '../SocialButtonElement';
import AntonAvatar from './images/anton-avatar.png';
import AllaAvatar from './images/alla-avatar.png';
import SphereLogo from './images/sphere-logo.png';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <hr className="dark mt-50 mb-80"/>
          <div className="text-center text-30 dark-blue-text mb-30">Free & Open</div>
          <div className="text-center text-18 mb-30">
            Rebel Icons are completely free and licensed under MIT. We use Rebel Icons in almost all of <br/>
            our new and upcoming websites — and we would love you to do that as well. <br/>
            Contributions are welcome!
          </div>
          <div className="layout horizontal center-justified mb-60">
            <Link to="/installation" className="button blue-button">Read full instruction</Link>
          </div>
          <div className="text-center text-24">
            Support us:
          </div>
          <SocialButtonsSet />
          <div className="layout horizontal wrap center-justified mb-80">
            <div className="mr-70 ml-70 mt-10 mb-10 text-center">
              <img src={ AntonAvatar } alt="Anton Avatar"/>
              <div className="mt-5">Anton Shemerey</div>
            </div>
            <div className="mr-70 ml-70 mt-10 mb-10 text-center">
              <img src={ AllaAvatar } alt="Alla Avatar"/>
              <div className="mt-5">Alla Odeianenko</div>
            </div>
          </div>
          <div className="text-center text-24 mb-50">
            Sponsored by:
          </div>
          <div className="text-center mb-80">
            <img src={ SphereLogo } alt="Sphere Logo"/>
          </div>
        </div>
        <div className="grey-bg heavy-border-bottom p-40">
          <div className="container text-center text-18">
            <div className="mb-30">Rebel Icons licensed under MIT License</div>
            <a href="#" className="grey-text">GitHub Repo</a>
          </div>
        </div>
      </footer>
    );
  }
}
