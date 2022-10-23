import React from 'react'
import { useModal } from './hooks/useModal'
import Modal from './Modal'

const Modals = () => {

  const [isOpen, openModal, closeModal] = useModal(false) 
//   const [isOpen2, openModal2, closeModal3] = useModal(false) 

  return (
    <div>
        <button onClick={openModal} >Modal1</button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
           <div>gaaaa</div>
           <h1>super gaaa</h1>
        </Modal>
    </div>
  )
}

export default Modals