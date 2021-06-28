import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//let elemento = <p>Hola soy Gonza desde JSX</p>;
//let nombre = "Gonza Filo";

//let calculo = (edad) => {
//  return 5 + 5 + edad;
//};
//let jsxMultiple = (
//  <div>
//    <h1>
//      Soy una variable con muchos elementos {nombre} y tengo {calculo(12)}
//    </h1>
//    <h3>JSX te amo</h3>
//    <p>Esto es lo más glorioso del mundo</p>
//  </div>
//);
//let container = document.getElementById("root");
//ReactDOM.render(jsxMultiple, container);
