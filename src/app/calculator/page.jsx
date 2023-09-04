'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import LogicalNot from '../../components/LogicalNot';

export default function Calculator() {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.item1}>
          <h1 className={styles.title}>Calculadora</h1>
          <p className={styles.item1Text}>Modelo</p>
          <div className="App mt-5">
            <LogicalNot />
          </div>
          <p className={styles.item1Text}>Qtd. Veículos</p>
          <input type="number" className={`${styles.input}`} />
          <p className={styles.item1Text}>Distância</p>
          <input type="number" className={`${styles.input}`} />
          <p className={styles.item1Text}>Porcentagem</p>
          <input type="number" className={`${styles.input}`} />
        </div>

        <div className={styles.item2}>
          <h1 className={styles.title}>Resultados</h1>
          <p className={styles.item1Text}>L50</p>
          <input type="number" className={`${styles.input}`} disabled />
          <p className={styles.item2Text}>L90</p>
          <input type="number" className={`${styles.input}`} disabled />
          <p className={styles.item2Text}>Leq</p>
          <input type="number" className={`${styles.input}`} disabled />
        </div>
      </div>
    </div>
  );
}

