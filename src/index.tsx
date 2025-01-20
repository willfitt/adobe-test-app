import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {defaultTheme, Provider} from '@adobe/react-spectrum';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  </React.StrictMode>
);
