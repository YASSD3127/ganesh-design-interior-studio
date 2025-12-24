// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// // Fix ancestorOrigins
// if (!window.location.ancestorOrigins) {
//   window.location.ancestorOrigins = { contains: () => false };
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ancestorOrigins fix
if (!window.location.ancestorOrigins) {
  window.location.ancestorOrigins = { contains: () => false };
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
