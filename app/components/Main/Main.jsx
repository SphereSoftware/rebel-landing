import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { SketchPicker } from 'react-color';

import IconElement from '../IconElement';
import * as icons from 'rebel-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import { SocialButtonsSet } from '../SocialButtonElement';
import map from 'lodash/map';
import chunk from 'lodash/chunk';
import reduce from 'lodash/reduce';
import CN from 'classnames';
import styles from './styles.css';

const SIZES =[
  ['S', 20],
  ['M', 30],
  ['L', 50]
];

export default class Main extends Component {
  state = {
    perRow: 8,
    icon: null,
    currentRow: null,
    size: 30
  };

  render() {
    const { icon, perRow, currentRow, size } = this.state;

    return (
      <main>
        <div className="container">
          <div className="text-center text-24">
            Simple and clean SVG icon pack with the code to support
            <br/>
            Rails, Sprockets, Node.js, Gulp, Grunt and CDN.
          </div>
          <SocialButtonsSet/>
          <div className="layout horizontal center-justified wrap mb-80">
            <div className="mr-20 ml-20 mt-10 mb-10">
              <Link to="/installation" className={ `button blue-button ${styles.button}` }>Getting Started</Link>
              <div className="text-center text-12 mt-5">Installation guide for developers</div>
            </div>
            <div className="mr-20 ml-20 mt-10 mb-10">
              <a href="#" className={ `button dark-blue-button ${styles.button}` }>Download</a>
              <div className="text-center text-12 mt-5">SVG, AI & Sketch for designers</div>
            </div>
          </div>
        </div>
        <hr className="mb-80 mr-80 ml-80"/>
        <div className="container">
          <div className="layout horizontal wrap end mb-20">
            <div className="flex layout horizontal">
              { SIZES.map(([l, siz]) =>
                  <div
                    key={ l }
                    className={ CN('mr-10', styles.toggleSize, { [styles.active]: size === siz } ) }
                    onClick={ () => this.setState({ size: siz }) }
                  >
                    { l }
                  </div>
                )
              }
            </div>
            <div className="flex two text-center mr-20 ml-20">
              <div className="text-30 dark-blue-text mb-20">Regular Style</div>
              <div className="text-18">Copy and paste icon names to use with your code</div>
            </div>
            <div className="flex mt-20">
              <input type="search" placeholder="Search" className={ styles.search }/>
            </div>
          </div>
          <hr className="dark"/>
          { chunk(Object.keys(icons), perRow).map((row, i) =>
              <div key={ i } className="layout horizontal wrap center">
                { row.map(ikon =>
                    <IconElement
                      key={ ikon }
                      icon={ ikon }
                      size={ size }
                      onClick={ () => this.setState({ icon: ikon, currentRow: i }) }
                    />
                  )
                }
                <PreviewBlock active={ currentRow === i } icon={ icon } />
              </div>
            )
          }
        </div>
      </main>
    );
  }
}

const importCode = `
import OpenIcon from 'rebel-icons/open';

class Question extends React.Component {
  render() {
    return (
      <div>
        Feel free to open new thread
        <OpenIcon />
      </div>
    );
  }
}
`;
const importWholePack = `import * as RebelIcons from 'rebel-icons';`;
const importMultipleIcons = `import { CancelIcon, ChatIcon, CheckIcon } from 'rabel-icons';`;

class PreviewBlock extends Component {
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string
  };

  state = {
    color: '#153a55',
    size: "180"
  };

  render() {
    const { active, icon } = this.props;
    const { color, size } = this.state;

    if (!active || !icon) return null;

    return (
      <div className="grey-bg p-25 layout horizontal wrap">
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
          <div className="layout horizontal center mb-20">
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
            You can import this icon with following code:
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { importCode }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">
            Also it's possible to include the whole icon pack from:
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { importWholePack }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">
            or import multiple icon from the same pack
          </div>
          <div className="grey-bg p-20 mb-50">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { importMultipleIcons }
            </SyntaxHighlighter>
          </div>
          <div className="layout horizontal end-justified">
            <Link to="/installation" className="button blue-button">Read full instruction</Link>
          </div>
        </div>
      </div>
    );
  }
}
