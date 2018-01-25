import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/normalize.scss';
import './assets/styles/skeleton.scss';
import Headphones from './headphones';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Headphones />, document.getElementById('root'));
registerServiceWorker();
