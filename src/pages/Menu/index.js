import React, { useEffect, useState } from 'react';

import api from "../../services/api"
import { formatMoney } from '../../functions/currency'
import { formatTimespans, getWorkingHours, getWeekDay, checkSchedule } from "../../functions/date"

import { Header, SearchBar, Card } from "../../components"
import { Container, Page, RestaurantInfo, Content, Image, Info, SearchContainer, MenuContainer } from './styles';

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
      const restaurantData = response.data;

      if(restaurantData.hours){
        restaurantData.hours.map((item, index) => {
          restaurantData.hours[index].working = getWorkingHours(item.days);
        })
      }

      setRestaurant(restaurantData)
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
        <RestaurantInfo>
          { restaurant.image && (
            <Image>
              <img src={restaurant.image} alt={"Logo"} />
            </Image>
          )}

          <Info>
            <p className="name">{restaurant.name}</p>
            <p>{restaurant.address}</p>
            <div className="hours">
              {restaurant.hours?.map(item => (
                <p className="time">{item.working}: <span>{item.from} às {item.to}</span></p>
              ))}
            </div>
          </Info>

        </RestaurantInfo>

        <Content>
          <div className="left">
            <SearchContainer>
              <SearchBar action={setSearch} labelText={"Buscar no cardápio"} />
            </SearchContainer>

            <MenuContainer>
              {menu.map(item => {
                //Filter items according to lowercase
                if(item.name.toLowerCase().includes(search.toLowerCase())){
                  return (
                    <div className="item">
                      <Card
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
          </div>

          <div className="right"></div>
        </Content>
        
      </Page>
    </Container>
  );
}

export default Menu;