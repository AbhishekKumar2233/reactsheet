import React from "react";
import "./styles.css";

const name = "abhishek Kumar";
const currentDate = new Date();
const year = currentDate.getFullYear(); //current year function

//img
const img = "https://picsum.photos/200";

//inline css using js var
const copyright = {
  color: "black",
  textDecoration: "underline"
};
//change style using var
copyright.color = "grey";

export default function Task1() {
  return (
    <div className="Task1">
      <img src={img}></img>
      <img src={img + "?grayscale"}></img>
      {/* inline css */}
      <h4 style={{ color: "#5fa726", fontSize: "20px" }}>Created by {name}</h4>
      <h5 style={copyright}>@Copyright {year}</h5>
    </div>
  );
}
