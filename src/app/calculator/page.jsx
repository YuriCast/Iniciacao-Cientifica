import React from 'react'
import styles from './page.module.css'

const Calculator = () => {
  return (
    <div className={styles.main}>
      <div className={styles.item1}>
        <div className={styles.teste}>
        <h3 className={styles.titulo}>
          Calculadora
        </h3>
        <p>
          Modelo
        </p>
        <input type="text" className={styles.input}/>
        <p className={styles.subtitulo}>
          Qtd. Veículos
        </p>
        <input type="number" className={styles.input}/>
        <p className={styles.subtitulo}>
          Distância
       </p>
        <input type="number" className={styles.input}/>
        <p className={styles.subtitulo}>
          Porcentagem
        </p>
        <input type="number" className={styles.input}/>
        </div>
      </div>

      <div className={styles.item2}>
        <h3 className={styles.titulo}>
          Resultado
        </h3>
        <p className={styles.subtitulo}>
          L50
        </p>
        <input type="number" className={styles.input}/>
        <p className={styles.subtitulo}>
          L90
        </p>
        <input type="number" className={styles.input}/>
        <p className={styles.subtitulo}>
           Leq
        </p>
        <input type="number" className={styles.input}/>
      </div>
    </div>
  )
}

export default Calculator