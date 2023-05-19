import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "./context/books";

const id = document.getElementById("root");
const root = ReactDOM.createRoot(id);

root.render(
  <Provider >
    <App />
  </Provider>
);
