import styled from 'styled-components';

/* Responsável por englobar menu lateral e o mapa */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  margin-bottom: 1rem;
`;

export const Map = styled.div`
  background-color: blue;
  width: 31.25rem;
`;
