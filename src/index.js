import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginContextProvider from './Context/login-context';

ReactDOM.render(
    <LoginContextProvider>
        <App />, 
    </LoginContextProvider>,
    document.getElementById('root'));
registerServiceWorker();
