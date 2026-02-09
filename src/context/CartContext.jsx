import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // 🔹 Persistencia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  // 🔹 Acciones
  const addProduct = (product) => {
    setProducts((prev) => {
      const existing = prev.find((p) => p.product.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.product.id === product.id ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...prev, { product, count: 1 }];
    });
  };

  const addQuantity = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.product.id === id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const removeQuantity = (id) => {
    setProducts((prev) =>
      prev
        .map((p) => (p.product.id === id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0)
    );
  };

  const removeProduct = (id) => {
    const newArray = products.filter((item) => item.product.id !== id);
    setProducts(newArray);
  };

  const clearCart = () => setProducts([]);

  // 🔹 Datos derivados
  const totalItems = products.reduce((acc, p) => acc + p.count, 0);

  const totalPrice = products.reduce(
    (acc, p) => acc + p.product.price * p.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        addQuantity,
        removeQuantity,
        clearCart,
        removeProduct,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
