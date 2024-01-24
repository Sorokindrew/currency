import React from 'react';
import styles from './HomePage.module.css';
import { DownPart } from '../DownPart/DownPart';
import { Logo } from '../Logo/Logo';
import { UpperPart } from '../UpperPart/UpperPart';
import { Cat } from '../Cat/Cat';


export function HomePage() {
    return (
        <div className={styles.container}>
            <UpperPart />
            <DownPart />
            <Cat />
        </div>
    );
};