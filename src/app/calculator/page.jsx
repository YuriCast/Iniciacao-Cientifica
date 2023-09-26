"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Calculator() {

  const [selectedModel, setSelectedModel] = useState("hanc");

  const [modelValues, setModelValues] = useState({
    param1: "",
    param2: "",
    param3: "",
    param4: ""
  });

  const [result, setResult] = useState("");

  const handleModelChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedModel(selectedOption);
  };

  const handleInputChange = (event) => {
    //  spread operator to update only the relevant field of the state
    setModelValues({
      ...modelValues,
      [event.target.name]: event.target.value,
    });
  };


  function calcHanc() {
    if ((modelValues.param1) && (modelValues.param2)) {
      const result =
        68 +
        8.5 * Math.log(parseFloat(modelValues.param1)) -
        20 * Math.log(parseFloat(modelValues.param2));
      setResult(result.toFixed(2)); // Atualize o resultado no estado
    } else {
      setResult(""); // Se um dos parâmetros não for um número válido, limpe o resultado
    }
  }

  function calcGalloway() {
    if ((modelValues.param1) > 0 && (modelValues.param2) > 0 && (modelValues.param3) > 0 && (modelValues.param4) > 0) {
      const result =
        20 + 10 *
        Math.log((parseFloat(modelValues.param1) *
          Math.pow(parseFloat(modelValues.param3), 2)) /
          parseFloat(modelValues.param2)) + 0.4 *
          parseFloat(modelValues.param4) / 100
    }
    else {
      setResult("");
    }
  }

  function calcJohnson() {
    if ((modelValues.param1) > 0 && (modelValues.param2) > 0 && (modelValues.param3) > 0) {
      const result =
        3.5 + 10 *
        Math.log((parseFloat(modelValues.param1) *
          Math.pow(parseFloat(modelValues.param3), 3)) /
          parseFloat(modelValues.param2))
    } else {
      setResult("");
    }
  }

  useEffect(() => {
    if
      (selectedModel === "hanc") {
      calcHanc();
    }
    else if
      (selectedModel === "johnson") {
      calcJohnson()
    }
    else if
      (selectedModel === "galloway") {
      calcGalloway()
    }
    else if
      (selectedModel === "burgess") {
      calcBurgess()
    }
    else if
      (selectedModel === "griffiths") {
      calcGriffiths()
    }
    else if
      (selectedModel === "fagotti") {
      calcFagotti()
    }
    else if
      (selectedModel === "bolt") {
      calcBolt()
    }
    else if
      (selectedModel === "cstb") {
      calcCstb()
    }
  }, [modelValues.param1, modelValues.param2, modelValues.param3, modelValues.param4]);


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
            className={`${styles.inputSelect}`}
            onChange={handleModelChange}
          >
            <option className={`${styles.option}`} value="hanc">Hanc</option>
            <option className={`${styles.option}`} value="johnson">Johnson</option>
            <option className={`${styles.option}`} value="galloway">Galloway</option>
            <option className={`${styles.option}`} value="burgess">Burgess</option>
            <option className={`${styles.option}`} value="griffiths">Griffiths</option>
            <option className={`${styles.option}`} value="fagotti">Fagotti</option>
            <option className={`${styles.option}`} value="bolt">Bolt</option>
            <option className={`${styles.option}`} value="cstb">CSTB</option>
          </select>

          <p className={styles.item1Text}>Qtd. Veículos</p>
          <input
            type="number"
            name="param1"
            className={`${styles.input}`}
            value={modelValues.param1}
            onChange={handleInputChange}
          />

          <p className={styles.item1Text}>Distância (km)</p>
          <input type="number"
            name="param2"
            className={`${styles.input}`}
            value={modelValues.param2}
            onChange={handleInputChange}
          />
          {selectedModel === 'galloway' && (
            <div>
              <p className={styles.item1Text}>Porcentagem de veículos pesados em tráfego</p>
              <input type="number"
                name="param3"
                className={`${styles.input}`}
                value={modelValues.param3}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>

        <div className={styles.item2}>
          <h1 className={styles.title}>Resultados</h1>
          {selectedModel === 'griffiths' && (
            <div className={styles.resultInput}>
              <p className={styles.item2Text}>L10</p>
              <input
                type="number"
                className={`${styles.input}`}
                disabled />
            </div>
          )}
          <div className={styles.resultInput}>
          <p className={styles.item2Text}>L50</p>
          <input
            type="number"
            value={result}
            className={`${styles.input}`}
            readOnly
          />
          </div>
          {selectedModel === 'griffiths' && (
            <div className={styles.resultInput}>
            <p className={styles.item2Text}>L90</p>
              <input
                type="number"
                className={`${styles.input}`}
                disabled />
            </div>
          )}


          {selectedModel === 'burgess' || selectedModel === 'griffiths' && (
            <div className={styles.resultInput}>
            <p className={styles.item2Text}>Leq</p>
              <input
                type="number"
                className={`${styles.input}`}
                disabled />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
