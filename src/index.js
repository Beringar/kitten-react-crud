import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import KittenContextProvider from "./components/contexts/KittenContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <KittenContextProvider>
      <App />
    </KittenContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
