import React from 'react';

import { FiArrowLeft } from 'react-icons/fi'
import { Container, GoBack } from './styles';

function Header({ showBack }) {
  return (
    <Container>
      {showBack && (
        <GoBack to={'/'}>
          <FiArrowLeft color='#fff' size={30} />
        </GoBack>
      )}
    </Container>
  )
}

export default Header;