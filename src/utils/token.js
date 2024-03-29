// Get the token from the browser cookies
const getToken = () => {
  return sessionStorage.getItem('token');
};

// Set a token in the browser cookies
const setToken = (token) => {
  sessionStorage.setItem('token', JSON.stringify(token));
};

const removeToken = () => {
  sessionStorage.removeItem('token');
};

module.exports = { setToken, getToken, removeToken };
