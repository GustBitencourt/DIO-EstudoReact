import styled from 'styled-components';
import Slider from 'react-slick';

/* Responsável por englobar menu lateral e o mapa */
export const Wrapper = styled.div`
  display: flex;
`;
/* Menu lateral */
export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background}
  width: 22.5rem;
  heigth: 100vh;
  overflow-y: auto;
`;

/* input de texto pra search */
export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 1rem;
`;

export const Logo = styled.img`
  margin: 1rem;
`;

export const Map = styled.div`
  background-color: blue;
  width: 31.25rem;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 1rem;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.8125rem;
  margin: 1rem 0;
`;
