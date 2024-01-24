import React, { useContext, useState } from 'react';

import styles from './Select.module.css';
import { CurrencyContext } from '../../CurrencyContext/CurrencyContext';

export const Select = () => {
    const { currency, setCurrency } = useContext(CurrencyContext);
    return (
        <select name="select" className={styles.select} value={currency} onChange={(event) => setCurrency(event.currentTarget.value)}>
            <option value="aed">AED</option>
            <option value="rub">RUB</option>
            <option value="all">ALL</option>
            <option value="amd">AMD</option>
        </select>
    );
};