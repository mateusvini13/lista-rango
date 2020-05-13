import React from 'react';

import { Container, Image, Content, Open } from './styles';

function RestaurantCard({id, open, name, address, picture}) {
  return (
    <Container onClick={() => console.log(id)}>
      { picture && (
        <Image>
          <img src={picture} alt={"Logo do Restaurante"} />
        </Image>
      )}

      <Content>
      <p className="title">{name}</p>
        <p>{address}</p>
      </Content>
      
      <Open open={open}>
        <p>{open ? "Aberto agora" : "Fechado"}</p>
      </Open>
    </Container>
  );
}

export default RestaurantCard;