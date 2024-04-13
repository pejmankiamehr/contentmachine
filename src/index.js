import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>
          ماشین محتوا
        </title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
