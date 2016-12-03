import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/app.css';
import RebelIconSvg from './RebelIcon.svg'

import App from 'App';
import js from 'highlight.js/lib/languages/javascript';
import lowlight from 'lowlight/lib/core';

lowlight.registerLanguage('javascript', js);
const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
root.classList.add('loaded');
document.querySelector('.preloader').remove();
