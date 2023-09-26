"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Calculator() {
  const [qtd_veiculos, setQtd_veiculos] = useState();
  const [distancia, setDistancia] = useState();
  const [selectedModel, setSelectedModel] = useState("hanc"); 

  const [modelValues, setModelValues] = useState({
    param1: "",
    param2: "",
    param3: "",
    param4: ""
  });
  const [result, setResult] = useState("");

  function updateModel (selectedModel) {
    setSelectedModel(selectedModel);
    if (selectedModel === "hanc") {
      calcHanc();
    }
  }
  
  function calcHanc() {
  if (modelValues.param1 > 0 && modelValues.param2 > 0) {
    const result =
      68 +
      8.5 * Math.log(parseFloat(modelValues.param1)) -
      20 * Math.log(parseFloat(modelValues.param2));
      setResult(result.toFixed(2)); // Atualize o resultado no estado
  } else {
    setResult(""); // Se um dos parâmetros não for um número válido, limpe o resultado
    alert("Parâmetros não podem ser nulos");
  }
}

function calcGalloway () {
  if ((modelValues.param1) > 0 && (modelValues.param2) > 0 && (modelValues.param3) > 0 && (modelValues.param4) > 0) {
      const result =
      20 + 10 * 
      Math.log((parseFloat(this.state.param1) * 
      Math.pow(parseFloat(this.state.param3), 2)) / 
      parseFloat(this.state.param2)) + 0.4 * 
      parseFloat(this.state.param4)/100 
  }
  else {
      alert("Parâmetros não podem ser nulos")
  }
}

useEffect(() => {
  if (selectedModel === "hanc") {
    calcHanc();
  }
}, [selectedModel]);


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

          <p className={styles.item1Text}>Distância (km)</p>
          <input type="number" 
          className={`${styles.input}`} 
          value={distancia}
          onChange={(event) => setDistancia(event.target.value)}
          />

          <p className={styles.item1Text}>Porcentagem de veículos pesados em tráfego</p>
          <input type="number" 
          className={`${styles.input}`} 
          />
        </div>

        <div className={styles.item2}>
          <h1 className={styles.title}>Resultados</h1>
          <p className={styles.item1Text}>L50</p>
          <input 
          type="number" 
          value={result}
          className={`${styles.input}`} 
          readOnly 
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
