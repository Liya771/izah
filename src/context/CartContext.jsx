import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const add = (item) => setCart((prev) => [...prev, item]);
  const remove = (index) =>
    setCart((prev) => prev.filter((_, i) => i !== index));
  const clear = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const discount =
    subtotal >= 399
      ? Math.round(subtotal * 0.2)
      : subtotal >= 299
      ? Math.round(subtotal * 0.1)
      : 0;

  const total = subtotal - discount;

  return (
    <CartContext.Provider
      value={{ cart, add, remove, clear, subtotal, discount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
