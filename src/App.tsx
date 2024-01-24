import React, { useState } from 'react';
import { HomePage } from './components/HomePage/HomePage';
import { CurrencyContext } from './CurrencyContext/CurrencyContext';
import './styles.css';


function App() {
    const [currency, setCurrency] = useState('rub')
    const CurrencyProvider = CurrencyContext.Provider
    return (
        <CurrencyProvider value={{ currency, setCurrency }}>
            <HomePage />
        </CurrencyProvider>
    );
};

export default App;