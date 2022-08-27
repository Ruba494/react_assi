import React from 'react'
import { Modal } from 'bootstrap'

function ItemModal({ key,menuname,image,price,dicription,open,onClose}) {
   
  return (
    
    <>
    {open?
    
    <div className='ModalBG'  >
  <div className='ModalContent' >
<button onClick={onClose}>X</button>
  </div>
</div>
    
    : null}

    </>
  )
}

export default ItemModal