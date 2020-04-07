import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';

import socketIOClient from 'socket.io-client';

function App() {
    const endpoint = 'http://localhost:3001';

    const socket = socketIOClient(endpoint);
    return (
        <h1></h1>
    );
}

export default App;
