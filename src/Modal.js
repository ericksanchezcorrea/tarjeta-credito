import React from 'react'
import './Modal.css'
import IconCompleted from './components/images/icon-complete.svg'


const Modal = ({ isOpen, closeModal }) => {
  const handleModalContainerClick = (e) =>  e.stopPropagation()

  return (
    <article className = {`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className='modal-close' onClick={closeModal}>X</button>
          <figure>
            <img src={IconCompleted} alt="IconCompleted" />
          </figure>
        <h1>THANk YOU!</h1>
        <h3>We've added your card details</h3>
        <input type='submit' value='Continue' onClick={closeModal}/>
      </div>
    </article>
  )
}

export default Modal