import React, { useEffect, useState } from 'react';

import api from "../../services/api"
import { formatMoney } from '../../functions/currency'
import { formatTimespans, getWorkingHours, getWeekDay, checkSchedule } from "../../functions/date"

import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { Header, SearchBar, Card, Modal } from "../../components"

import GoomerLogo from '../../assets/icons/goomer.svg'

import { 
  Container, 
  Page, 
  RestaurantInfo, 
  Content, 
  Image, 
  Info, 
  SearchContainer, 
  Group, 
  GroupHeader, 
  MenuContainer,
  ModalContent
} from './styles';

function Menu({ match }) {
  const [search, setSearch] = useState('');
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [meal, setMeal] = useState({})
  const [quantity, setQuantity] = useState(1)

  function closeModal(){
    setIsOpen(false);
  }

  function openMealModal(selected){
    console.log(selected)
    setMeal(selected);
    setIsOpen(true);
  }

  function changeQuantity(qtd){
    const newQuantity = quantity + qtd > 0 ? quantity + qtd : 1;
    setQuantity(newQuantity);
  }
  
  // Check meals on sale
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
    }

    fetchRestaurant()
    fetchMenu() 
  }, [match.params.id])

  useEffect(() => {
    // Check sales every 3 minutes
    const interval = setInterval(() => {
      checkSales(menu);
    }, 3 * 60000);
    return () => clearInterval(interval)
  }, [menu])

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <ModalContent coverImage={!!meal.image}>
          <div className="content">
            <div className="img-container">
              <img src={meal.image ? meal.image : GoomerLogo} alt="imagem do prato"/>
            </div>  

            <div className="info">
              <div className="text">
                <p className="title">{meal.name}</p>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

            <p className="price">{formatMoney(meal.sale ? meal.sale.price : meal.price)}</p>
            </div>
          </div>

          <div className="footer">
            <div className="close" onClick={() => closeModal()}>
              <FiX color="#000000" size={32}/>
            </div>

            <div className="controls">
              <button className="btn" type="button" onClick={() => changeQuantity(-1)}>
                <FiMinus color="#009CA3" size={24}/>
              </button>

              <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>

              <button className="btn" type="button" onClick={() => changeQuantity(1)}>
                <FiPlus color="#009CA3" size={24}/>
              </button>
            </div>

            <div className="add">
              <p>Adicionar</p>
              <p>{formatMoney((meal.sale ? meal.sale.price : meal.price) * quantity)}</p>
            </div>
          </div>
        </ModalContent>
      </Modal>
      <Header showBack />

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

              {Object.keys(menu).map((group) => (
                <Group closed={menu[group].closed}>
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
                </Group>
              ))}
          </div>

          <div className="right"></div>
        </Content>
        
      </Page>
    </Container>
  );
}

export default Menu;