import React from "react";
import "./styles.css";

const name = "abhishek Kumar";
const currentDate = new Date();
const year = currentDate.getFullYear(); //current year function

export default function Task1() {
  return (
    <div className="Task1">
      <h4>Created by {name}</h4>
      <h5>Copyright {year}</h5>
    </div>
  );
}
