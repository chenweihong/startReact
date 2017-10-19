import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {DatePicker} from 'antd'
import FirstComponent from './components/firstComponent'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<DatePicker />, document.getElementById('antd_1'))
// var name = "hehheheh"
ReactDOM.render(<FirstComponent />, document.getElementById('component_placeholder'))
registerServiceWorker();
