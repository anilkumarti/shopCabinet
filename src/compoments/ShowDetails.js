import React from "react";

import PrintInventory from "./PrintInventory";

const ShowDetails = (props) => {
  const Inventory =
    props.inventories &&
    props.inventories.map((inventory) => (
      <PrintInventory
        key={inventory.id}
         name={inventory.name}
        description={inventory.description}
        price={inventory.price}
        quantity={inventory.quantity}
        id={inventory.id}
      />
    ));

  return <ul>{Inventory}</ul>;
};
export default ShowDetails;
