import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css"; // Ensure your global styles are imported here

ReactDOM.render(<App />, document.getElementById("root"));
