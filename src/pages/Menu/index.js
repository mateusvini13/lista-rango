import React, { useEffect, useState } from 'react';

import api from "../../services/api"
import { formatTimespans, getWeekDay, checkSchedule } from "../../functions/date"

import { Header, SearchBar, Modal, RestaurantInfo, FoodGroup } from "../../components"

import { toast } from 'react-toastify';
import { useParams, useHistory } from 'react-router-dom';

import {  Container, Page, Content, SearchContainer } from './styles';

function Menu() {
  const { id } = useParams();
  const history = useHistory();

  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [meal, setMeal] = useState({})

  function openMealModal(selected){
    setMeal(selected);
    setIsOpen(true);
  }
  
  async function checkSales(groups){
    const newMenu = {}

    // map each meal in the group
    Object.keys(groups).map((item) => {
      newMenu[item] = {closed: true, items: []}
      
      // Check sales for that meal
      groups[item].items.map((meal) => {
        if(meal.sales){
          meal.sales.map(sale => {
            sale.schedule[getWeekDay()].some(period => {
              meal.onSale = false;
              if(checkSchedule(period.from, period.to)){
                meal.onSale = {
                  description: sale.description, 
                  price: sale.price
                }
                return true;
              }
            })
          })
        }

        // Adds meal to updated menu
        newMenu[item].closed = groups[item].closed
        newMenu[item].items.push(meal);
      })
    })

    setMenu(newMenu);
  }

  async function toggleGroup(groupToToggle){
    const newMenu = {}

    // Map menu and toggle selected group
    Object.keys(menu).map((group) => {
      if(groupToToggle === group){
        newMenu[group] = {
          closed: !menu[group].closed, 
          items: menu[group].items
        }
      } else {
        newMenu[group] = menu[group];
      }
    })

    setMenu(newMenu)
  }

  // Fetch menu
  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await api.get(`restaurants/${id}/menu`);
        const menuList = response.data;
        const grouped = {}

        menuList.map((item, index) => {
          // Check sales for each item and prepare sale schedules
          if(item.sales){
            item.sales.map((sale, saleIndex) => {
              menuList[index].sales[saleIndex].schedule = formatTimespans(sale.hours);
            })
          }

          // Group items
          if(!grouped[item.group.toLowerCase()]){
            grouped[item.group.toLowerCase()] = {closed: false, items: [menuList[index]]}
          } else {
            grouped[item.group.toLowerCase()].items = [ ...grouped[item.group.toLowerCase()].items, menuList[index]]
          }
        })
        
        await checkSales(grouped);
      } catch (error) {
        toast.error('Erro ao buscar cardápio. Tente novamente!');
        history.push('/');
      }
    }

    fetchMenu() 
  }, [history, id])

  // Check sales every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      checkSales(menu);
    }, 3 * 60000);
    return () => clearInterval(interval)
  }, [menu])

  return (
    <Container>
      <Modal
        meal={meal}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
      />

      <Header showBack />

      <Page>
        <RestaurantInfo id={id} />

        <Content>
          <div className="left">
            <SearchContainer>
              <SearchBar action={setSearch} labelText={"Buscar no cardápio"} />
            </SearchContainer>

            {Object.keys(menu).map((group) => (
              <FoodGroup 
                menu={menu}
                search={search}
                group={group}
                toggleGroup={toggleGroup}
                openMealModal={openMealModal}
              />
            ))}
          </div>

          <div className="right"></div>
        </Content>
        
      </Page>
    </Container>
  );
}

export default Menu;