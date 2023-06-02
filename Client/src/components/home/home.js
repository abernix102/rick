import styled from "styled-components";
import fondoMarty from '../../assets/924300.png'

export const Fondo = styled.section`
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${fondoMarty});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;

export const DivFondo = styled.div `
  min-height: 100vh;
  display: flex;
`