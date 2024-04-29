import React, {useState} from 'react'
 
const InputInventory = (props) => {
 const [name,setName]=useState('');
 const [description,setDescription]=useState('');
 const [price,setPrice]=useState('')
 const [quantity,setQuantity]=useState('')

 const HandleNameChange=(e)=> {
    setName(e.target.value)
 }
 const HandleDescriptionChange=(e)=> {
  setDescription(e.target.value)
}
const HandlePriceChange=(e)=> {
  setPrice(e.target.value)
}
const HandleQuantityChange=(e)=> {
  setQuantity(e.target.value)
} 



const handleSubmit=(e)=> {
  e.preventDefault()
  const derievedId=Math.random()
  const Inventory= {name:name, description:description,price:price,quantity:quantity ,id:derievedId};
  props.handleDetails(Inventory);
  

}
  return (
  
   <form>
    <label htmlFor='namein' >Name </label>
    <input type='text' id='namein' onChange={HandleNameChange}/> 

    <label htmlFor='description' >Description</label>
    <input type='text' id='description' onChange={HandleDescriptionChange} /> 

    <label htmlFor='pricein'>Price</label>
    <input type='number' id='pricein' onChange={HandlePriceChange}/> 

    <label htmlFor='quaintityin'>Quantity Available</label>
    <input type='number' id='quantityin' onChange={HandleQuantityChange} /> 
   <button onClick={handleSubmit}>Submit</button>
   </form>
  )
}

export default InputInventory;
