import React, { useEffect, useState } from 'react';

import api from "../../services/api"
import { getWorkingHours, getWeekDay, checkTimeBetween } from "../../functions/date"

import { Header, SearchBar, RestaurantCard } from "../../components"
import { Container, Page, Title, SearchContainer, Restaurants } from './styles';

function Main() {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  
  // Fetch restaurant list
  async function fetchRestaurants() {
    const response = await api.get('restaurants');
    const restaurantList = response.data;
    
    restaurantList.map((item, index) => {
      restaurantList[index].schedule = getWorkingHours(item.hours);
    })
    
    await updateOpen(restaurantList);
  }

  // Check open restaurants
  async function updateOpen(list){
    list.map((item, index) => {
      list[index].open = false;
      list[index].schedule[getWeekDay()].map(shift => {
        list[index].open = checkTimeBetween(shift.from, shift.to);
      })
    })
    console.log('list', list)

    setRestaurants(list);
  }

  useEffect(() => {
    fetchRestaurants()

    //Check open restaurants every 15 minutes
    setInterval(() => {
      const mins = new Date().getMinutes();
      if (mins === "00" || mins === "15" || mins === "30" || mins === "45") {
        updateOpen(restaurants);
      }
    }, 60 * 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header />

      <Page>
        <Title>Bem-vindo ao Lista Rango</Title>

        <SearchContainer>
          <SearchBar action={setSearch} labelText={"Buscar estabelecimento"} />
        </SearchContainer>

        <Restaurants>
          {restaurants.map(item => {
            //Filter restaurants according to search
            if(item.name.toLowerCase().includes(search.toLowerCase())){
              return (
                <RestaurantCard 
                  id={item.id }
                  open={item.open}
                  name={item.name}
                  address={item.address}
                  picture={item.image}
                />
              )
            }
          })}
        </Restaurants>
        
      </Page>
    </Container>
  );
}

export default Main;