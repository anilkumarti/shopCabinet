import React, {useState} from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
  const [updatedItems,setUpdatedItems]=useState([])
  const addItemToCart=(item)=> 
 {   setUpdatedItems((prev)=> {
      return [...prev,item]
 }) 

  }
  const removeItemFromCart=()=> {
 
  }
    const cartContext= {
        items:updatedItems,
        amount:0,
        addItems:addItemToCart,
        removeItems:removeItemFromCart
    };
  return ( 
    <CartContext.Provider value={cartContext}>
     {props.children}
    
    </CartContext.Provider>
  )
}


export default CartProvider

