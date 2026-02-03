import {  Route, Routes } from "react-router";
import "./App.css";

import MainLayout from "./layout/MainLayout";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
