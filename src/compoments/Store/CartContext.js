import { createContext } from "react";

const CartContext = createContext({
  items: [],
  amount: 0,
  addItems: () => {},
  removeItems: () => {},
});
export default CartContext
