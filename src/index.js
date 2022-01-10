import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Task1 from "./Task1";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode className="App">
    <App />
    <Task1 />
  </StrictMode>,
  rootElement
);
