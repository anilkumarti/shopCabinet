import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  let TotalPrice=0;
  const newItems = ctx.items.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + Number(item.EnteredQuantity);
    {console.log("enter",typeof(item.EnteredQuantity))}
    return acc;
  }, {});
  const cartItems = (
    <ul>
    
      {Object.keys(newItems).map((itemID) => {
        const itemFounded = ctx.items.find((item) => Number(item.id) === Number(itemID));
        const sumOfPrice=Number(itemFounded.price)*Number(newItems[itemID]);
          TotalPrice=TotalPrice+sumOfPrice;
        
        {console.log(itemFounded)}
        return (
          itemFounded && (
            <li key={itemID}>
              {itemFounded.name}
              {itemFounded.description}
              <div> Price-{itemFounded.price} </div>
            </li>
          )
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <h3> Total Price={TotalPrice}</h3>

      {console.log("this is ctx", ctx)}
    </Modal>
  );
};

export default Cart;
