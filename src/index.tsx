import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";

const target = document.querySelector("#root");

if (target) {
  ReactDOM.render(<div className={style.root}>Hello World</div>, target);
}
