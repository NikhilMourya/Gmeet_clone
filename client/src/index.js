import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
// import {} from '@mui/material'

import { ContextProvider } from './components/SocketContext';

import './style.css';
import './index.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById('root'));

