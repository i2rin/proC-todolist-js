import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
  //脆弱性を発見したらすぐにwarningを出す
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);
