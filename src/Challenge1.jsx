import React from "react";
import "./styles.css";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const timecolor = {
  color: "red",
  fontSize: "17px",
  fontFamily: "Ubuntu"
};

//condition for change color and content in a day

if (currentTime < 12) {
  greeting = "Good Morning";
  timecolor.color = "#FFcc00";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  timecolor.color = "Red";
} else {
  greeting = "Good Night";
  timecolor.color = "black";
}

export default function Challenge1() {
  return <h2 style={timecolor}> {greeting} </h2>;
}
