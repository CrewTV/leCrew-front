// Get the token from the browser cookies
const getToken = () => {
  const token = sessionStorage.getItem('token');
  return token;
};

// Set a token in the browser cookies
const setToken = (token) => {
  sessionStorage.setItem('token', JSON.stringify(token));
};

module.exports = { setToken, getToken };
