"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
export default function Calculator() {



const [selectedModel, setSelectedModel] = useState("hanc");
const [modelValues, setModelValues] = useState({
  param1: "",
  param2: "",
  param3: "",
  param4: "",
});
const [result, setResult] = useState("");

const handleModelChange = (event) => {
  const selectedOption = event.target.value;
  setSelectedModel(selectedOption);
};

const handleInputChange = (event) => {
  // Use the spread operator to update only the relevant field of the state
  setModelValues({
    ...modelValues,
    [event.target.name]: event.target.value,
  });
};

// Call the calculation function when the component loads or when the input values change
React.useEffect(() => {
  calcHanc();
}, [modelValues.param1, modelValues.param2]);

 const calcJohnson = () => {
  if ((this.state.param1) > 0 && (this.state.param2) > 0 && (this.state.param3) > 0) {
      this.setState({ result: 3.5 + 10 * Math.log((parseFloat(this.state.param1) * Math.pow(parseFloat(this.state.param3), 3)) / parseFloat(this.state.param2)) })
  }
  else {
      alert("Parâmetros não podem ser nulos")
  }
}

 const calcHanc = () => {
  // Verify if both parameters are numbers before calculating
  if (!isNaN(modelValues.param1) && !isNaN(modelValues.param2)) {
    // Perform the specific calculation for the "Hanc" model
    const result =
      68 +
      8.5 * Math.log(parseFloat(modelValues.param1)) -
      20 * Math.log(parseFloat(modelValues.param2));
    setResult(result.toFixed(2)); // Round the result to 2 decimal places
  } else {
    setResult(""); // If one of the parameters is not a valid number, clear the result
  }
};




return(
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

          <p className={styles.item1Text} id="qtd_veiculos">Qtd. Veículos</p>
          <input
           type="text"
           name="param1"
            className={`${styles.input}`}
            value={modelValues.param1}
            onChange={handleInputChange}
          />

          <p className={styles.item1Text} id="distancia">Distância</p>
          <input 
          type="text"
          name="param2"
          className={`${styles.input}`} 
          value={modelValues.param2}
          onChange={handleInputChange}
          />

          <p className={styles.item1Text} id="porcentagem">Porcentagem</p>
          <input type="number" 
          name="param3"
          className={`${styles.input}`} 
          value={modelValues.param3}
          onChange={handleInputChange}
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
