import React, { useState } from 'react';
import Modal from 'react-modal'

import { formatMoney } from '../../functions/currency'
import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import GoomerLogo from '../../assets/icons/goomer.svg'

import { Container, Close, Content, Footer, Controls, Add } from './styles'

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

function ModalComponent({ meal, closeModal, ...props }){
  const [quantity, setQuantity] = useState(1)
  
  function changeQuantity(qtd){
    const newQuantity = quantity + qtd > 0 ? quantity + qtd : 1;
    setQuantity(newQuantity);
  }

  return (
    <Modal style={styles} {...props}>
      <Container>
        <Close onClick={() => closeModal()}>
          <FiX color="#000000" size={32}/>
        </Close>

        <Content coverImage={!!meal.image}>
          <div className="img-container">
            <img src={meal.image ? meal.image : GoomerLogo} alt="imagem do prato"/>
          </div>  

          <div className="info">
            <div className="text">
              <p className="title">{meal.name}</p>
              <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

          <p className="price">{formatMoney(meal.sale ? meal.sale.price : meal.price)}</p>
          </div>
        </Content>

        <Footer>
          <Controls>
            <button className="btn" type="button" onClick={() => changeQuantity(-1)}>
              <FiMinus color="#009CA3" size={24}/>
            </button>

            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>

            <button className="btn" type="button" onClick={() => changeQuantity(1)}>
              <FiPlus color="#009CA3" size={24}/>
            </button>
          </Controls>

          <Add>
            <p>Adicionar</p>
            <p className="price">{formatMoney((meal.sale ? meal.sale.price : meal.price) * quantity)}</p>
          </Add>
        </Footer>
      </Container>
    </Modal>
  )
}

export default ModalComponent;