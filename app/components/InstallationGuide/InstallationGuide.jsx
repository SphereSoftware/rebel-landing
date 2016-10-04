import React, { Component, PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

const installationCode = '$ npm install rebel-icons --save';
const fromCompiledFolder = `
var Beer = require('rabel-icons/beer');

var Question = React.createClass({
  render: function() {
    return React.createElement('h3', null, 'Lets go for a ', React.createElement(Beer, null), '?');
  }
});`;
const importCode = `
import OpenIcon from 'rebel-icons/open';

class Question extends React.Component {
  render() {
    return <div>Feel free to open new thread <OpenIcon /></div>
  }
}`;
const importWholePack = `import * as RebelIcons from 'rebel-icons'`;
const importMultipleIcons = `import { CancelIcon, ChatIcon, CheckIcon } from 'rabel-icons'`;

export default class InstallationGuide extends Component {
  render() {
    return (
      <div>
        <div className="text-center text-24 mb-40">
          Include popular icons in your React projects easly with rabel-icons, <br/>
          which utilizes ES6 imports that allows you to include only the icons <br/>
          that your project is using.
        </div>
        <hr className="mb-80 mr-80 ml-80"/>
        <div className="container">
          <div className="text-24 dark-blue-text mb-20">Instraction</div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { installationCode }
            </SyntaxHighlighter>
          </div>
          <div className="text-24 dark-blue-text mb-20">Usage</div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { importCode }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">
            If you are not using es6 compiler like babel or rollup.js, it's possible to include icons from the
            compiled folder ./lib. Babel by default will ignore node_modules so if you don't want to change the settings you will need to use files from ./lib
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { fromCompiledFolder }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">
            You can include icons directly from rebel-icons using import Beer from 'rebel-icons', but you should
            wait to Webpack 2 implement dead code elimination based on es6 imports.
          </div>
          <div className="mb-20">
            Also it's possible to include the whole icon pack from:
          </div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { importWholePack }
            </SyntaxHighlighter>
          </div>
          <div className="mb-20">Or import multiple icons from the same pack</div>
          <div className="grey-bg p-20 mb-20">
            <SyntaxHighlighter language='javascript' style={ docco }>
              { importMultipleIcons }
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
