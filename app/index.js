import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/app.css';

import App from 'App';
import js from 'highlight.js/lib/languages/javascript';
import lowlight from 'lowlight/lib/core';

lowlight.registerLanguage('javascript', js);

ReactDOM.render(<App/>, document.getElementById('root'));
