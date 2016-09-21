import React, { Component } from 'react';
import { Link } from 'react-router';
import { SketchPicker } from 'react-color';

import IconElement from '../IconElement';
import * as icons from 'rebel-icons';
import { SocialButtonsSet } from '../SocialButtonElement';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import styles from './styles.css';

export default class Main extends Component {
  state = {
    icon: 'RubyIcon',
    color: '#153a55',
    size: "180"
  };

  render() {
    const { icon, color, size } = this.state;

    return (
      <main>
        <div className="text-center text-24">
          Simple and clean SVG icon pack with the code to support
          <br/>
          Rails, Sprockets, Node.js, Gulp, Grunt and CDN.
        </div>
        <SocialButtonsSet/>
        <div className="layout horizontal center-justified mb-80">
          <div className="mr-40">
            <Link to="/installation" className={ `button blue-button ${styles.button}` }>Getting Started</Link>
            <div className="text-center text-12 mt-5">Installation guide for developers</div>
          </div>
          <div>
            <a href="#" className={ `button dark-blue-button ${styles.button}` }>Download</a>
            <div className="text-center text-12 mt-5">SVG, AI & Sketch for designers</div>
          </div>
        </div>
        <hr className="mb-80 mr-80 ml-80"/>
        <div className="container">
          <div className="layout horizontal end mb-20">
            <div className="flex layout horizontal">
              <div className={ `${styles.toggleSize} ${styles.active} mr-10` }>S</div>
              <div className={ `${styles.toggleSize} mr-10` }>M</div>
              <div className={ styles.toggleSize }>L</div>
            </div>
            <div className="flex two text-center mr-20 ml-20">
              <div className="text-30 dark-blue-text mb-20">Regular Style</div>
              <div className="text-18">Copy and paste icon names to use with your code</div>
            </div>
            <div className="flex">
              <input type="search" placeholder="Search" className={styles.search}/>
            </div>
          </div>
          <hr className="dark"/>
          <div className="layout horizontal center wrap">
            { Object.keys(icons).map(icon =>
                <IconElement
                  key={ icon }
                  icon={ icon }
                  onClick={ () => this.setState({ icon }) }
                />
              )
            }
          </div>
          <div className="grey-bg p-25 layout horizontal">
            <div className="mr-30">
              <div className={ `${styles.previewBox} p-20 mb-20 layout horizontal center-center` }>
                { React.createElement(icons[icon], { color,  size }) }
              </div>
              <div className="mb-20">Color</div>
              <SketchPicker
                color={ color }
                onChangeComplete={ (newColor) => this.setState({ color: newColor.hex }) }
              />
              <div className="mb-20 mt-20">Size</div>
              <div className="layout horizontal center">
                <input
                  type="number"
                  value={ size }
                  onChange={ (e) => this.setState({ size: e.target.value }) }
                />
                <div className="ml-20">px</div>
              </div>
            </div>
            <div className="flex white-bg p-20">
              <div className="mb-20">
                You can import  this icon with following code:
              </div>
              <div className="grey-bg p-20 mb-20"></div>
              <div className="mb-20">
                Also it's possible to include the whole icon pack from:
              </div>
              <div className="grey-bg p-20 mb-20"></div>
              <div className="mb-20">
                or import multiple icon from the same pack
              </div>
              <div className="grey-bg p-20 mb-50"></div>
              <div className="layout horizontal end-justified">
                <Link to="/installation" className="button blue-button">Read full instruction</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
