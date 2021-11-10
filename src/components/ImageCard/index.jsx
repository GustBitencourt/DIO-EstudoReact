import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.3125rem
  width: 5.625rem;
  height 5.625rem;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 1rem;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo} >
    <Title>{title}</Title>;
  </Card>
);

export default ImageCard;
