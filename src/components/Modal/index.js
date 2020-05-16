import React from 'react';
import Modal from 'react-modal'

const styles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: 0,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px #00000033',
    overflow: 'initial'
  }
}

Modal.setAppElement('#root')

function ModalComponent(props){
  return (
    <Modal style={styles} {...props}>
      {props.children}
    </Modal>
  )
}

export default ModalComponent;