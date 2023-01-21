import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'assets/scss/black-dashboard-react.scss';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';
import App from 'components/App';
import './assets/css/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BackgroundColorWrapper>
    <ThemeContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextWrapper>
  </BackgroundColorWrapper>
);
