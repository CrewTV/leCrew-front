import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from 'views/account/Login';
import Register from 'views/account/Register';
import Dashboard from 'views/Dashboard';

import HomePage from 'views/landing/HomePage';

function App() {
    const [token, setToken] = useState('tets');

    // Conditionally redirect based on isAuthenticated boolean
    const AuthWrapper = ({ isAuthenticated }) => {
        return isAuthenticated ? (
            <Navigate to="/dashboard" replace />
        ) : (
            <Navigate to="/home" replace />
        );
    };

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <div>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<AuthWrapper isAuthenticated={isAuthenticated} />}
                    />
                    <Route path="/dashboard" element={<MainLayout />} />

                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="*"
                        element={
                            <div>
                                <h2>404 Page not found</h2>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;