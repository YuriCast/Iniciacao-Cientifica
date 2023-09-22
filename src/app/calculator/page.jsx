"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function Calculator() {

 // Estado para armazenar o valor inserido
 
 const [modelValues, setModelValues] = useState({
  param1: "",
  param2: "",
});

const [result, setResult] = useState('');

const calcHanc = () => {
  // Verifique se ambos os parâmetros são números antes de calcular
  if (!isNaN(modelValues.param1) && !isNaN(modelValues.param2)) {
    // Realize o cálculo específico para o modelo "Hanc"
    const result =
      68 + 8.5 * Math.log(parseFloat(modelValues.param1)) -
      20 * Math.log(parseFloat(modelValues.param2));
    setResult(result.toFixed(2)); // Arredonde o resultado para 2 casas decimais
  } else {
    setResult(''); // Se um dos parâmetros não for um número válido, limpe o resultado
  }
};
const [selectedModel, setSelectedModel] = useState("hanc");

const handleModelChange = (event) => {
  const selectedOption = event.target.value;
  setSelectedModel(selectedOption);

  // Aqui você pode fazer algo com a opção selecionada
  if (selectedOption === "hanc") {
    // Fazer algo quando "Hanc" estiver selecionado
    
  } else if (selectedOption === "johnson") {
    // Fazer algo quando "Johnson" estiver selecionado
  } else if (selectedOption === "galloway") {
    // Fazer algo quando "Galloway" estiver selecionado
  }
  else if (selectedOption === "burgess") {
    // Fazer algo quando "Galloway" estiver selecionado
  }
  else if (selectedOption === "griffiths") {
    // Fazer algo quando "Galloway" estiver selecionado
  }
  else if (selectedOption === "fagotti") {
    // Fazer algo quando "Galloway" estiver selecionado
  }
  else if (selectedOption === "bolt") {
    // Fazer algo quando "Galloway" estiver selecionado
  }
  else if (selectedOption === "cstb") {
    // Fazer algo quando "Galloway" estiver selecionado
  }
  
};

const handleInputChange = (event) => {
  // Use o spread operator para atualizar apenas o campo relevante do estado
  setModelValues({
    ...modelValues,
    [event.target.name]: event.target.value,
  });

  calcHanc(); // Chamar a função de cálculo quando o valor for alterado
};

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
            className={`${styles.toggle}`}
            value={selectedModel}
            onChange={handleModelChange}
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
           type="text"
           name="param1"
            className={`${styles.input}`}
            value={modelValues.param1}
            onChange={handleInputChange}
          />

          <p className={styles.item1Text}>Distância</p>
          <input 
          type="text"
          name="param2"
          className={`${styles.input}`} 
          value={modelValues.param2}
          onChange={handleInputChange}
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
          placeholder="Resultado"
          value={result}
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
