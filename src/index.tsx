import "reboot.css";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hello</div>;
};

const target = document.querySelector("#root");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    if (target) {
      ReactDOM.render(<App />, target);
    }
  });
} else {
  ReactDOM.render(<App />, target);
}
