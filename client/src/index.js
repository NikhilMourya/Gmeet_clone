import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
// import {} from '@mui/material'

import { ContextProvider } from './components/SocketContext';

import './style.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById('root'));

