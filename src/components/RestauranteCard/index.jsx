import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurant from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf valur={4} edit={false} activeColor="#e7711c" />
      <Address>Endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant} alt="foto do restaurant" />
  </Restaurant>
);
export default RestaurantCard;

