import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input, Icon  } from './styles';

function SearchBar({ labelText, action }) {
  return (
    <Container>
      <Label><p>{labelText}</p></Label>

      <Input placeholder={labelText} onChange={(e) => action(e.target.value)}></Input>
      
      <Icon src={require('../../assets/icons/search.svg')}/>
    </Container>
  );
}

export default SearchBar;

SearchBar.defaultProps = {
  labeltext: 'Buscar'
};

SearchBar.propTypes = {
  labelText: PropTypes.string.isRequired,
  action: PropTypes.func
};