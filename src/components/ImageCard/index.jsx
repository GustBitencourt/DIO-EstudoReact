import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 5.625rem;
  height 5.625rem;
  border-radius: 6px;
  background-image: ${(props) => props.photo};
  background-size: cover;
`;

const ImageCard = ({ photo }) => <Card photo={photo} />

export default ImageCard;