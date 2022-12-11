import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Register({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
};