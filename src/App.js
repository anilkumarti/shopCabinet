import Header from "./compoments/Header";
import "./App.css";

import Cart from "./compoments/Cart/Cart";
import InventoryItems from "./compoments/InventoryItems";
import { useState } from "react";
import ShowDetails from "./compoments/ShowDetails";
import CartProvider from "./compoments/Store/CartProvider";

function App() {
  const [inventories,setInventories] = useState([]);
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=> {
    setCartIsShown(true)
  }
  const hideCartHandler=()=> {
    setCartIsShown(false)
  }


  const handleInventoryDetails = (Inventory) => {
    setInventories((prev) => [...prev, Inventory]);
    
  };
  return (
    <CartProvider>
    {cartIsShown &&   <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} />
      <main>
        <InventoryItems handleDetails={handleInventoryDetails}></InventoryItems>
        <ShowDetails inventories={inventories} />
      </main>
    </CartProvider>
  );
}

export default App;
