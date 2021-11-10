import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(true);

  /* Configuração do carrossel */
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurant} title="Nome Restaurante" />
            <Card photo={restaurant} title="Nome Restaurante" />
            <Card photo={restaurant} title="Nome Restaurante" />
            <Card photo={restaurant} title="Nome Restaurante" />
            <Card photo={restaurant} title="Nome Restaurante" />
            <Card photo={restaurant} title="Nome Restaurante" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/> */}
    </Wrapper>
  );
};

export default Home;
