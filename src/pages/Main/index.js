import React, { useEffect, useState } from 'react';

import api from "../../services/api"

import { getWorkingHours } from "../../functions/date"
// import { Container } from './styles';

function Main() {
  async function fetchRestaurants() {
    const response = await api.get('restaurants');

      response.data.map(item => {
        console.log(getWorkingHours(item.hours))
      })
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return <div />;
}

export default Main;