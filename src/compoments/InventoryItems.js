
import React from 'react'
import InputInventory from './InputInventory'
const InventoryItems = (props) => {
  
  return (
    <div>
      <InputInventory handleDetails={props.handleDetails}/>
      </div>
  )
}

export default InventoryItems
