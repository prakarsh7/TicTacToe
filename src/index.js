import React, { StrictMode } from "react"; // imports react
import { createRoot } from "react-dom/client"; // imports library to talk to browser (React-DOM)
import "./styles.css"; // import styles from styles.css

import App from "./App"; // import App component from App.js

// the below code injects the final product into index.html
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);