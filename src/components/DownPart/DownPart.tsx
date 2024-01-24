import React, { useContext } from 'react';

import styles from './DownPart.module.css';
import { CurrencyContext } from '../../CurrencyContext/CurrencyContext';

export const DownPart = () => {
    const { currency } = useContext(CurrencyContext);
    let currency_name = 'Russian ruble'
    switch (currency) {
        case 'all':
            currency_name = 'Some all';
            break;
        case 'aed':
            currency_name = 'Some aed';
            break;
        case 'amd':
            currency_name = 'Some amd';
            break;
        default:
            currency_name = 'Russian ruble';
    }
    return (
        <div className={styles.block}>
            <div className={styles.currency}>{currency_name}</div>
        </div>
    );
};