/// <reference types="react-dom/experimental" />
import "reboot.css";
import React from "react";
import ReactDOM from "react-dom";
import { FormComponent } from "./form";

const App = () => {
  return <FormComponent />;
};

const target = document.querySelector("#root");
if (target) {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(() => {
      ReactDOM.unstable_createRoot(target).render(<App />);
    });
  } else {
    ReactDOM.unstable_createRoot(target).render(<App />);
  }
}
