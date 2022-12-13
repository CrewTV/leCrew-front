import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'views/account/Login';
import Register from 'views/account/Register';
import Dashboard from 'views/Dashboard';

import HomePage from 'views/landing/HomePage';

function App() {
    const [token, setToken] = useState();

    return (
        token ? <MainLayout /> : <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<MainLayout />} />
        </Routes>
    );
}

export default App;