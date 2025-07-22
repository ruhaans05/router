import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./router.css"; // or whatever your CSS is called

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
