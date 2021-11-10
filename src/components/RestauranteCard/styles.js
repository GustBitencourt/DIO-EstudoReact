import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0.3125rem;
  padding: 1rem;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: #00000021;
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  font-size: 1.8125rem;
  margin-bottom: 0.625rem
`;

export const Address = styled.span`
font-family: ${(props) => props.theme.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  font-weight: bold;
  font-size: 1.8125rem;
  margin-bottom: 0.625rem
`;

export const RestaurantPhoto = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
  border-radius: 0.375rem;
`;
