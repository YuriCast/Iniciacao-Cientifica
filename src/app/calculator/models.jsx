import React, { useState } from 'react';
import styles from "./page.module.css";

// calculator elements for hanc model
export default function HANC () {
  const props = {
          param1: 0,
          param2: 0,
          result: 0
      }
  }

  calcHanc = () => {
      if ((this.state.param1) > 0 && (this.state.param2) > 0) {
          this.setState({ result: 68 + 8.5 * Math.log(parseFloat(this.state.param1)) - 20 * Math.log(parseFloat(this.state.param2)) })
      }
      else {
          alert("Parâmetros não podem ser nulos")
      }
  }
  {
    return (
      <div className={styles.item2}>
      <h1 className={styles.title}>Resultados</h1>
      <p className={styles.item1Text}>L50</p>
      <input type="number" className={`${styles.input}`} disabled />

      <p className={styles.item2Text}>L90</p>
      <input type="number" className={`${styles.input}`} disabled />

      <p className={styles.item2Text}>Leq</p>
      <input type="number" className={`${styles.input}`} disabled />
    </div>
    );
  }
