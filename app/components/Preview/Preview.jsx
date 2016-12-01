import React, { PropTypes, Component } from 'react';
import SketchPicker from 'react-color/lib/components/sketch/Sketch';

import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/tomorrow';
import Icon from 'rebel-icons';

import styles from './styles.css';

export default class Preview extends Component {
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

    const importCode = `import Icon from 'rebel-icons';\n\n<Icon icon="${icon}" size={ ${size} } color="${color}" />`;

    const importWholePack = `import * as RebelIcons from 'rebel-icons';`;
    const importMultipleIcons = `import { ${icon}, CheckIcon } from 'rabel-icons';`;

    return (
      <div className="grey-bg p-25 flex layout horizontal wrap">
        <div className="mr-30">
          <div className="layout horizontal center-justified wrap">
            <div className={ `${styles.previewBox} layout horizontal center-center` }>
              <Icon icon={ icon } { ...{ color,  size } }/>
            </div>
            <div>
              <div className="mb-20">Color</div>
              <SketchPicker
                color={ color }
                onChange={ (newColor) => this.setState({ color: newColor.hex }) }
              />
            </div>
          </div>
          <div className="mt-20 mr-20">Size { size } px</div>
          <div className="layout horizontal mb-20">
            <input
              type="range"
              min="16"
              max="200"
              step="4"
              className="flex"
              value={ size }
              onChange={ (e) => this.setState({ size: e.target.value }) }
            />
          </div>
        </div>

        <div className="flex white-bg p-20">
          <div className="mb-20">
            You can use this icon with following code:
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter style={ tomorrow }>
              { importCode }
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
