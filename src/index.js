import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Challenge1 from "./Challenge1";
import App from "./App";
import Task1 from "./Task1";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode className="App">
    <Challenge1 />
    <App />
    <Task1 />
  </StrictMode>,
  rootElement
);
