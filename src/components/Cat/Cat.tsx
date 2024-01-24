import React from 'react';

import styles from './Cat.module.css';

export const Cat = () => {
    return (
        <img src="./assets/images/kitten.svg" alt="Cat" className={styles.cat} />
    );
};