import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
const Backdrop=(props)=> {
    return (<div className={classes.backdrop} onClick={props.onClick}></div>)
}
const ModalOverLays=(props)=> {
 return(<div className={classes.modal}>
    <div className={classes.content}> {props.children}</div>
 </div>)
}

const Modal = (props) => {
   const portalElement=document.getElementById('overlays')
  return (
    <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverLays>{props.children}</ModalOverLays>,portalElement)}
    </Fragment>
  )
}

export default Modal
