import {useContext} from 'react';
import React from 'react'
import CartContext from './Store/CartContext';
import { ShoppingCart } from 'lucide-react';
 
const HeaderCartButton = (props) => {
  const Cartctx=useContext(CartContext);
   const numberOfCartItems=Cartctx.items.reduce((acc,initialValue)=>
   { 
   return acc+parseInt(initialValue.EnteredQuantity) },0   )


  return (
  <button onClick={props.onShowCart}>  
      <ShoppingCart />
     
    <span>{numberOfCartItems}</span>
  </button>
  )
}

export default HeaderCartButton
