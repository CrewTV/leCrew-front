import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'views/account/Login';
import Dashboard from 'views/Dashboard';

import HomePage from 'views/landing/HomePage';

function App() {
    const [token, setToken] = useState('test');

    const Redirection = token ? <HomePage /> : <Dashboard />

    return (
        <Routes>
            <Route path='/' element={token ? <MainLayout /> : <HomePage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
    );
}

export default App;