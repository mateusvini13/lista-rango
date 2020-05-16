import React from 'react';

import { Card } from ".."
import {  Container, GroupHeader, MenuContainer } from './styles';

function FoodGroup({ menu, search, group, openMealModal, toggleGroup }) {
  return (
    <Container closed={menu[group].closed}>
      <GroupHeader onClick={() => toggleGroup(group)}>
        <p>{group}</p>
        <img src={require('../../assets/icons/chevron.svg')} />
      </GroupHeader>

      <MenuContainer>
        {menu[group].items.map(item => {
          //Filter items according to lowercase
          if(item.name.toLowerCase().includes(search.toLowerCase())){
            return (
              <div className="item">
                <Card onClick={() => openMealModal(item)}
                  menu={true}
                  id={item.id}
                  sale={item.onSale}
                  price={item.price}
                  name={item.name}
                  address={item.address}
                  picture={item.image}
                />
              </div>
            )
          }
        })}
      </MenuContainer>
    </Container>
  )
}

export default FoodGroup;