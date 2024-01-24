import React from 'react';
// import logo from '../../assets/images/logo.png'

import styles from './Logo.module.css';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src="./assets/images/logo.png" alt="Logo" />
            <div className={styles.descr}>currencies academic terms</div>
        </div>
    );
};