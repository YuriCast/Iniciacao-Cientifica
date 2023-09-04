import React from 'react';
import styles from './page.module.css';


const Library = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Biblioteca Virtual</h1>
      <div className={styles.buttonContainer}>
        <div className={styles.column}>
        <button className={styles.button}>Capítulo 1<div className={styles.subtitle}>Som e Ruído</div></button>
        <button className={styles.button}>Capítulo 2<div className={styles.subtitle}>Natureza do Som</div></button>
        <button className={styles.button}>Capítulo 3<div className={styles.subtitle}>Onda sonora Plana</div></button>
        <button className={styles.button}>Capítulo 4<div className={styles.subtitle}>Onda sonora Esférica</div></button>
        </div>
        <div className={styles.column}>
        <button className={styles.button}>Capítulo 5<div className={styles.subtitle}>Forma da Onda</div></button>
        <button className={styles.button}>Capítulo 6<div className={styles.subtitle}>Impedância característica</div></button>
        <button className={styles.button}>Capítulo 7<div className={styles.subtitle}>Intensidade Sonora</div></button>
        <button className={styles.button}>Capítulo 8<div className={styles.subtitle}>Potência Sonora</div></button>
        </div>
      </div>
    </div>
  );
}

export default Library;
