import React, { useState } from 'react'
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

const AddCabin = () => {

return(
  
<div>
  <Modal>
    <Modal.Open opens ="cabin-form">
      <Button variations="primary" sizes='medium'>Add New Cabin</Button>
    </Modal.Open>

    <Modal.Window Name ="cabin-form">
      <CreateCabinForm />
    </Modal.Window>
  </Modal>
  </div>  )
/*
    const [showFormModal , setShowFormModal] = useState(false);
    const handleForm = ()=> {
      setShowFormModal((showFormModal) => !showFormModal)
    }
  return (
    <div>
         <Button onClick={handleForm}> Show Form </Button>
         { showFormModal && <Modal onClose={()=>setShowFormModal(false)}>
          <CreateCabinForm onCloseModal={()=>setShowFormModal(false)} /></Modal>}
    </div>
  )
  */
}

export default AddCabin;