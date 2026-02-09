import { Route, Routes } from "react-router";
import "./App.css";

import MainLayout from "./layout/MainLayout";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

import useProductFilter from "./hooks/useProductFilter";
import { useProducts } from "./context/ProductsContext";

function App() {
  const { products } = useProducts();
  const { filtered, category, setCategory } = useProductFilter(products);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home setCategory={setCategory} products={products}/>} />
        <Route
          path="/products"
          element={
            <Products
              filtered={filtered}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
