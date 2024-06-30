import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import BookingState from './context/Bookingstate';
import AuthState from './context/Authstate';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookingState>
    <AuthState>
    <App />
    </AuthState>
    </BookingState>
  
);


