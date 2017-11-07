import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// LineChart, PieChart, ....
// config 尽量相近
// data 尽量对使用者简单，易用。 属性名尽量少

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
