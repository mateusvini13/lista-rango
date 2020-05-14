import React, { useEffect, useState } from 'react';

import api from "../../services/api"
import { formatMoney } from '../../functions/currency'
import { formatTimespans, getWeekDay, checkSchedule } from "../../functions/date"

import { Header, SearchBar, Card } from "../../components"
import { Container, Page, Title, SearchContainer, Restaurants } from './styles';

function Menu({ match }) {
  const [search, setSearch] = useState('');
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  
  // Check meals on sale
  async function checkSales(list){
    //Map each meal in the menu list
    list.map((meal, index) => {
      if(meal.sales){
        meal.sales.map((sale, saleIndex) => {
          sale.schedule[getWeekDay()].some(period => {
            list[index].onSale = false;
            if(checkSchedule(period.from, period.to)){
              //Save current sale info
              list[index].onSale = {
                description: sale.description, 
                price: sale.price
              }
              return true;
            }
          })
        })
      }
    })

    setMenu([ ...list]);
  }

  useEffect(() => {
    // Fetch restaurant list
    async function fetchRestaurant() {
      const response = await api.get(`restaurants/${match.params.id}`);
      setRestaurant(response.data)
    }

    // Fetch menu
    async function fetchMenu() {
      const response = await api.get(`restaurants/${match.params.id}/menu`);
      const menuList = response.data;
      
      // Map sales for each item and prepare sale schedules
      menuList.map((item, index) => {
        if(item.sales){
          item.sales.map((sale, saleIndex) => {
            menuList[index].sales[saleIndex].schedule = formatTimespans(sale.hours);
          })
        }
      })
      
      await checkSales(menuList);
    }

    fetchRestaurant()
    fetchMenu() 
  }, [match.params.id])

  useEffect(() => {
    // Check sales every 3 minutes
    const interval = setInterval(() => {
      checkSales(menu);
    }, 180 * 1000);
    return () => clearInterval(interval)
  }, [menu])

  return (
    <Container>
      <Header />

      <Page>
        <Title>Bem-vindo ao Lista Rango</Title>

        <SearchContainer>
          <SearchBar action={setSearch} labelText={"Buscar no cardápio"} />
        </SearchContainer>

        <Restaurants>
          {menu.map(item => {
            //Filter items according to lowercase
            if(item.name.toLowerCase().includes(search.toLowerCase())){
              return (
                <Card
                  menu={true}
                  id={item.id}
                  sale={item.onSale}
                  price={item.price}
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

export default Menu;