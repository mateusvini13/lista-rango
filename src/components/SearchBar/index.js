import React from 'react';

import { Container, Label, Input, Icon  } from './styles';

function SearchBar({ labelText, action }) {
  return (
    <Container>
      <Label><p>{labelText}</p></Label>

      <Input onChange={(e) => action(e.target.value)}></Input>
      
      <Icon src={require('../../assets/icons/search.svg')}/>
    </Container>
  );
}

export default SearchBar;