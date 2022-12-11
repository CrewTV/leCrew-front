import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../views/Login'
import MainLayout from 'layouts/MainLayout';

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

export default App;