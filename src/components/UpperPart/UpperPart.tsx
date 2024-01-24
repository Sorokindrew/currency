import React from 'react';

import styles from './UpperPart.module.css';
import { Logo } from '../Logo/Logo';
import { Select } from '../Select/Select';

export const UpperPart = () => {
    return (
        <div className={styles.upper}>
            <Logo />
            <Select />
        </div>
    );
};