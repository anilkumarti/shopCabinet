import React from 'react'
import InventoryList from './InventoryList'

const PrintInventory = (props) => {
  return (
    <div>
      
     <InventoryList items={props} id={props.id}/>
     
    </div>
  )
}

export default PrintInventory
