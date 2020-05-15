import React, { useEffect, useState } from 'react';

import api from "../../services/api"
import { formatTimespans, getWeekDay, checkSchedule } from "../../functions/date"

import { Header, SearchBar, Card } from "../../components"
import { Container, Page, Title, SearchContainer, Restaurants } from './styles';

function Main() {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  // Check open restaurants
  async function updateOpen(list){
    list.map((item, index) => {
      list[index].open = item.schedule[getWeekDay()].some(shift => {
        return checkSchedule(shift.from, shift.to)
      })
    })

    setRestaurants([ ...list ]);
  }

  useEffect(() => {
    // Fetch restaurant list
    async function fetchRestaurants() {
      const response = await api.get('restaurants');
      const restaurantList = response.data;
      
      restaurantList.map((item, index) => {
        restaurantList[index].schedule = formatTimespans(item.hours);
      })
      
      await updateOpen(restaurantList);
    }
    
    fetchRestaurants()
  }, [])

  useEffect(() => {
    //Check open restaurants every 5 minutes
    const interval = setInterval(() => {
      updateOpen(restaurants);
    }, 180 * 1000);
    return () => clearInterval(interval)
  }, [restaurants])

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
                <div className="item">
                  <Card 
                    id={item.id }
                    open={item.open}
                    name={item.name}
                    desc={item.address}
                    picture={item.image}
                  />
                </div>
              )
            }
          })}
        </Restaurants>
        
      </Page>
    </Container>
  );
}

export default Main;