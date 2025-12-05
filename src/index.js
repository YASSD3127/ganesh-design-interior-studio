// 

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Fix ancestorOrigins crash
if (!location.ancestorOrigins) {
  location.ancestorOrigins = { contains: () => false };
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/ganesh-design-interior-studio">
    <App />
  </BrowserRouter>
);
