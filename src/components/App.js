import UserContext from 'contexts/UserContext';
import DescriptionLayout from 'layouts/DescriptionLayout';
import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getToken } from 'utils/token';
import Login from 'views/account/Login';
import Register from 'views/account/Register';
import AssetDesription from 'views/assets/AssetDescription';
import CrewDescription from 'views/crews/CrewDescription';

import { sampleUsers } from 'assets/samples/user';
import LandingPage from 'views/landing/LandingPage';

function App() {
  const token = getToken();

  // Placeholder data used to fill UI

  // Used to display pages with the layout that are not accessible from the sidebar
  const [descriptionComponent, setDescriptionComponent] = useState(null);

  const user = sampleUsers[0];

  return token ? (
    <UserContext.Provider value={{ user }}>
      <Routes>
        <Route path='/' element={<MainLayout />}></Route>
        <Route path='*' element={<div>404 Not found</div>}></Route>
        <Route
          path='/crew/:id'
          element={<DescriptionLayout component={<CrewDescription />} />}
        />
        <Route
          path='/asset/:id'
          element={<DescriptionLayout component={<AssetDesription />} />}
        />
        <Route path='/home' element={<LandingPage />} />
      </Routes>
    </UserContext.Provider>
  ) : (
    <Routes>
      <Route path='*' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register/:email' element={<Register />} />
    </Routes>
  );
}

export default App;
