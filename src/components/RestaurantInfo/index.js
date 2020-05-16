import React, { useState, useEffect } from 'react';

import api from "../../services/api"
import { getWorkingHours } from "../../functions/date"

import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import {  Container, Image, Info } from './styles';


function RestaurantInfo({ id }) {
  const history = useHistory();

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    // Fetch restaurant info
    async function fetchRestaurant() {
      try {
        const response = await api.get(`restaurants/${id}`);
        const restaurantData = response.data;

        if(restaurantData.hours){
          restaurantData.hours.map((item, index) => {
            restaurantData.hours[index].working = getWorkingHours(item.days);
          })
        }

        setRestaurant(restaurantData)
      } catch (error) {
        if(error.response.status === 404){
          toast.error('Restaurante não encontrado!');
        } else {
          toast.error('Erro ao buscar dados do restaurante. Tente novamente!');
        }

        history.push('/');
      }
    }

    fetchRestaurant()
  }, [history, id])

  return (
    <Container>
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
    </Container>
  )
}

export default RestaurantInfo;