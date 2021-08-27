import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './styles/format.css';
import * as service from "./service";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'));
    service.unregister();