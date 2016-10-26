import React, { PropTypes, Component } from 'react';
import SketchPicker from 'react-color/lib/components/sketch/Sketch';

import IconElement from '../IconElement';
import * as icons from 'rebel-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/tomorrow';
import SocialButtonsSet from '../SocialButtonElement';
import map from 'lodash/map';
import chunk from 'lodash/chunk';
import reduce from 'lodash/reduce';
import CN from 'classnames';
import DebounceInput from 'react-debounce-input';
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
    search: '',
    size: 30
  };

  filteredIcons() {
    const reg = new RegExp(
      this.state.search.toLowerCase()
      .split("")
      .reduce((a,b) => `${a}[^${b}]*${b}`, '')
    );

    return Object.keys(icons)
      .filter((item) => reg.test(item.toLowerCase())
    )
  }

  render() {
    const { icon, perRow, currentRow, size } = this.state;

    return (
      <main>
        <div className="container">
          <div className="text-center text-24">
            Simple and clean React SVG icon pack.
          </div>
          <SocialButtonsSet/>
          <div className="layout horizontal center-justified wrap mb-80">
            <div className="mr-20 ml-20 mt-10 mb-10">
              <a href="https://github.com/SphereSoftware/rebel-icons#rebel-icons" className={ `button blue-button ${styles.button}` }>Getting Started</a>
              <div className="text-center text-12 mt-5">Installation guide for developers</div>
            </div>
            <div className="mr-20 ml-20 mt-10 mb-10">
              <a href="https://github.com/SphereSoftware/rebel-icons/tree/master/icons" className={ `button dark-blue-button ${styles.button}` }>Download</a>
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
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                type="search"
                placeholder="Search"
                className={ styles.search }
                onChange={event => this.setState({search: event.target.value})} />
            </div>
          </div>
          <hr className="dark"/>
          { chunk(::this.filteredIcons(), perRow).map((row, i) =>
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

    const importCode = `
    import ${icon} from 'rebel-icons/${icon}';

    class ${icon} extends React.Component {
      render() {
        return (
          <div>
            Open new Icon
            <${icon} size={${size}} color="${color}"/>
          </div>
        );
      }
    }
    `;

    const importWholePack = `import * as RebelIcons from 'rebel-icons';`;
    const importMultipleIcons = `import { ${icon}, CheckIcon } from 'rabel-icons';`;

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
          <div className="mt-20 mr-20">Size {this.state.size} px</div>
          <div className="layout horizontal center mb-20">
            <input
              type="range"
              min="16"
              value="32"
              max="250"
              step="4"
              style={{width: "100%"}}
              value={ size }
              onChange={ (e) => this.setState({ size: e.target.value }) }
            />
          </div>
        </div>
        <div className="flex white-bg p-20">
          <div className="mb-20">
            You can import this icon with following code:
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ tomorrow }>
              { importCode }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">
            Also it's possible to include the whole icon pack from:
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ tomorrow }>
              { importWholePack }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">
            or import multiple icon from the same pack
          </div>
          <div className="grey-bg p-20 mb-50">
            <SyntaxHighlighter language='javascript' style={ tomorrow }>
              { importMultipleIcons }
            </SyntaxHighlighter>
          </div>
          <div className="layout horizontal end-justified">
            <a href="https://github.com/SphereSoftware/rebel-icons#rebel-icons" className="button blue-button">Read full instruction</a>
          </div>
        </div>
      </div>
    );
  }
}
