import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
// eslint-disable-next-line
import bootstrap from "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
