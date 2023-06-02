import styled from "styled-components";
export const Borde = styled.div `
    margin-Top: 120px;  
    margin-bottom: 120px;
    position: relative;
    overflow: hidden;
    width: 270px;
    height: 450px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.706) 0px 0px 10px 5px;
    font-size: 0.8rem;
`

export const Image = styled.img `
 width: 100%;
`

export const Contenedor = styled.div `
    display: flex;
    width: 90%;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`

export const Like = styled.div`
  width: 100%;
  position: absolute;
  justify-content: center;
   
  margin-top: 5px;
`;

export const CloseCard = styled.button `
    margin: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 5px;
    border: none;
    transition: all 0.4s ease 0s;
    position: absolute;
    &:hover{
      transform: scale(1.2);
      background-color: #ee0d0d;
      border: 2px solid #ee0d0d;
      color: #fff;
    }
`

export const Info = styled.div `
  text-align: start;
  /* font-size: 10px; */
  padding: 10px;
`

export const TitleInfo = styled.h2 `
font-family: "Seiza", sans-serif;
    font-size: 151%;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(0, 0, 0);
    font-size: 1.6rem;
`
export const P = styled.p `
    margin: 0px;
    font-size: 1rem;
    margin-bottom: 2px;
`

export const ButtonLike = styled.button `
    border: none;
    top: 8px;
    position: absolute;
    right: 10px;
    width: 2rem;
    height: 1.9rem;
    border-radius: 5px;
`