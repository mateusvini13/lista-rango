import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { formatMoney } from '../../functions/currency'
import { Container, Image, Content, Open, Prices, Sale, Badge } from './styles';

function Card({menu, id, open, name, desc, picture, price, sale, onClick}) {

  function renderMenuItem() {
    return (
      <Container menu onClick={onClick}>
        { picture && (
          <Image>
            <img src={picture} alt={"Logo"} />
          </Image>
        )}

        <Content>
          <p className="title">{name}</p>
          <p>{desc}</p>
          <Prices>
            <p>{sale ? formatMoney(sale.price) : formatMoney(price)}</p>
            {sale && (
              <p className="original">{formatMoney(price)}</p>
            )}
          </Prices>
        </Content>

        {sale && (
          <Sale>
            <Badge src={require('../../assets/icons/award.svg')}/>
            <p>{sale.description}</p>
          </Sale>
        )}
      </Container>
    )
  }

  function renderRestaurantCard(){
    return (
      <Link to={`/cardapio/${id}`} >
        <Container>
          { picture && (
            <Image>
              <img src={picture} alt={"Logo"} />
            </Image>
          )}

          <Content>
            <p className="title">{name}</p>
            <p>{desc}</p>
          </Content>

          <Open open={open}>
            <p>{open ? "Aberto agora" : "Fechado"}</p>
          </Open>
        </Container>
      </Link>
    )
  }

  return (
    <>
      {menu ? renderMenuItem() : renderRestaurantCard()}
    </>
    
  );
}

export default Card;

Card.defaultProps = {
  menu: false,
  open: false,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
};

Card.propTypes = {
  menu: PropTypes.bool.isRequired,
  id: PropTypes.number,
  open: PropTypes.bool,
  name: PropTypes.bool,
  picture: PropTypes.bool,
  price: PropTypes.number,
  sale: PropTypes.bool,
  onClick: PropTypes.bool,
  desc: PropTypes.string,
};