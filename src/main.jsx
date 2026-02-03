import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>
);
