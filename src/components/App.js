import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { getToken } from 'utils/token';
import Login from 'views/account/Login';
import Register from 'views/account/Register';
import Dashboard from 'views/Dashboard';

import HomePage from 'views/landing/HomePage';

function App() {
  const token = getToken();

  return token ? (
    <Routes>
      <Route path='*' element={<MainLayout />}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path='*' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
