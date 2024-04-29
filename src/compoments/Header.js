import React from 'react'

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
 
  return (
    <header>
     <h2> Inventory Management</h2> 
     <HeaderCartButton onShowCart={props.onShowCart}/>
      
    </header>
  )
}

export default Header;
