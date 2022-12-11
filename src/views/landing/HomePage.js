import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function HomePage({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <h1>Welcome to LeCrew</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}

HomePage.propTypes = {
};