import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles.css';
import App from './App'


console.log(document.getElementById('root'))
const root = createRoot(document.getElementById('root'));
root.render(<App />);