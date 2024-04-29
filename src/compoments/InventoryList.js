import React, { useContext,useState } from "react";
import CartContext from "./Store/CartContext";

const InventoryList = (props) => {
 
  const [isButtonDisabled,setIsButtonDisabled]=useState(false);
  const [currentQuantity,setCurrentQuantity]=useState(props.items.quantity)
  const ctx = useContext(CartContext);
  const addItemToCart = (e) => {
    e.preventDefault();
    const EnteredQuantity= parseInt(document.getElementById(props.id).value);
    const remainingQuantity=currentQuantity-EnteredQuantity;
      if(remainingQuantity>=0)
      {
        ctx.addItems({...props.items,EnteredQuantity:EnteredQuantity})
     
        setCurrentQuantity(remainingQuantity)
      }
     else if(remainingQuantity===0)
      {
      setIsButtonDisabled(true)
      }
      else {
        alert("not enough stock")
      }
       

  };
 const handleInputChange=(e)=> {
 const value=e.target.value;
  value<=props.items.quantity?setIsButtonDisabled(false):setIsButtonDisabled(true);
  if(currentQuantity<=0)
  {   
    setIsButtonDisabled(true)
    
  }
  
 
 } 

  return (
    <div>
      <h3>{props.items.name}</h3>
      <div>{props.items.description}</div>
      <div>Price: Rs {props.items.price}</div>
      <div> Total available quantity: {currentQuantity}</div>
      <form>
        <label htmlFor="amount">amount </label>
        <input 
          id={props.id}
          type="number"
          min="1"
          max="5"
          step="1"
         defaultValue='1'
          disabled={isButtonDisabled}
          onChange={handleInputChange}
        />  
        <button onClick={addItemToCart} disabled={isButtonDisabled}>Add</button>
      </form>  
   
    </div>
  );
};

export default InventoryList;
