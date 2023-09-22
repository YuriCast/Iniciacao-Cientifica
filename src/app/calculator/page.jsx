"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Calculator() {
  const [qtd_veiculos, setQtd_veiculos] = useState(0);
  const [selectedModel, setSelectedModel] = useState("hanc"); 

  const [modelValues, setModelValues] = useState({
    qtd_veiculos: "",
    distancia: "",
    porcentagem: "",
  });

  {selectedModel === "hanc" && (
    <>
      <p className={styles.item1Text}>Param1</p>
      <input
        type="number"
        className={`${styles.input}`}
        value={modelValues.param1}
        onChange={(event) =>
          setModelValues({ ...modelValues, param1: event.target.value })
        }
      />
  
      <p className={styles.item1Text}>Param2</p>
      <input
        type="number"
        className={`${styles.input}`}
        value={modelValues.param2}
        onChange={(event) =>
          setModelValues({ ...modelValues, param2: event.target.value })
        }
      />
    </>
  )}

  function updateModel (selectedModel) {
    const modelStates = {
      hanc: false,
      johnson: false,
      galloway: false,
      burgess: false,
      griffiths: false,
      fagotti: false,
      bolt: false,
      cstb: false,
    };
  
    modelStates[selectedModel] = true;
  
    this.setState({ ...modelStates });
  };

  function calcHanc() {
  if (modelValues.param1 > 0 && modelValues.param2 > 0) {
    // Realize o cálculo específico para o modelo "Hanc"
    const result =
      68 +
      8.5 * Math.log(parseFloat(modelValues.param1)) -
      20 * Math.log(parseFloat(modelValues.param2));
    // Atualize o resultado no estado ou faça o que for necessário com o resultado
  } else {
    alert("Parâmetros não podem ser nulos");
  }
}

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.item1}>
          <h1 className={styles.title}>Parâmetros</h1>
          <p className={styles.item1Text}>Modelo</p>
          {/* calculo dos modelos */}
          <select
            name="models"
            id="models"
            className={`${styles.input}`}
            onChange={(e) => this.updateModel(e.target.value)}
          >
            <option value="hanc">Hanc</option>
            <option value="johnson">Johnson</option>
            <option value="galloway">Galloway</option>
            <option value="burgess">Burgess</option>
            <option value="griffiths">Griffiths</option>
            <option value="fagotti">Fagotti</option>
            <option value="bolt">Bolt</option>
            <option value="cstb">CSTB</option>
          </select>

          <p className={styles.item1Text}>Qtd. Veículos</p>
          <input
            type="number"
            className={`${styles.input}`}
            value={qtd_veiculos}
            onChange={(event) => setQtd_veiculos(event.target.value)}
          />

          <p className={styles.item1Text}>Distância</p>
          <input type="number" 
          className={`${styles.input}`} 
          />

          <p className={styles.item1Text}>Porcentagem</p>
          <input type="number" 
          className={`${styles.input}`} 
          />
        </div>

        <div className={styles.item2}>
          <h1 className={styles.title}>Resultados</h1>
          <p className={styles.item1Text}>L50</p>
          <input 
          type="number" 
          className={`${styles.input}`} 
          disabled 
          />

          <p className={styles.item2Text}>L90</p>
          <input 
          type="number" 
          className={`${styles.input}`} 
          disabled />

          <p className={styles.item2Text}>Leq</p>
          <input 
          type="number" 
          className={`${styles.input}`} 
          disabled />
        </div> 
      </div>
    </div>
  );
}
