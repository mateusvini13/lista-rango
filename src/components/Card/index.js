import React from 'react';

import { formatMoney } from '../../functions/currency'
import { Container, Image, Content, Open, Prices, Sale, Badge } from './styles';

function Card({menu, id, open, name, desc, picture, price, sale}) {
  return (
    <Container menu={menu} onClick={() => console.log(id)}>
      { picture && (
        <Image>
          <img src={picture} alt={"Logo"} />
        </Image>
      )}

      <Content>
        <p className="title">{name}</p>
        <p>{desc ? desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}</p>
        {menu && (
          <Prices>
            <p>{sale ? formatMoney(sale.price) : formatMoney(price)}</p>
            {sale && (
              <p className="original">{formatMoney(price)}</p>
            )}
          </Prices>
        )}
      </Content>
      
      {!menu && (
        <Open open={open}>
          <p>{open ? "Aberto agora" : "Fechado"}</p>
        </Open>
      )}

      {sale && (
        <Sale>
          <Badge src={require('../../assets/icons/award.svg')}/>
          <p>{sale.description}</p>
        </Sale>
      )}
    </Container>
  );
}

export default Card;