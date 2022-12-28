import UserContext from 'contexts/UserContext';
import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { getToken } from 'utils/token';
import Login from 'views/account/Login';
import Register from 'views/account/Register';
import CrewDescription from 'views/crews/CrewDescription';

import HomePage from 'views/landing/HomePage';

function App() {
  const token = getToken();

  // Placeholder data used to fill UI
  const user = {
    id: 1,
    firstName: 'Robin',
    lastName: 'Hood',
    email: 'robin.hood@epita.fr',
    age: 19,
  };

  return token ? (
    <UserContext.Provider value={{ user }}>
      <Routes>
        <Route path='/' element={<MainLayout />}></Route>
        <Route path='*' element={<div>404 Not found</div>}></Route>
        <Route path='/crew/:id' element={<CrewDescription />} />
      </Routes>
    </UserContext.Provider>
  ) : (
    <Routes>
      <Route path='*' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
