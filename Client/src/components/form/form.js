import styled, {keyframes} from "styled-components";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px); /* Ajusta la distancia del rebote */
  }
  100% {
    transform: translateY(0);
  }
`;

export const FormS = styled.form `
position: relative;
display: flex;
flex-direction: column;
width: 280px;
height: 350px;
background-color: #FFF;
margin: 0;
box-shadow: -1px 0px 25px 0px #21719369;
padding: 2.25em;
box-sizing: border-box;
border: solid 1px #DDD;
border-radius: 0.5em;
font-family: sans-serif;
font-size: 16px;
font-weight: 400;
`

export const SectionForm = styled.section `
    position: relative;
    display: flex;
    background: -webkit-linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(27, 95, 131) 100%);
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const ImgCont = styled.img `
position: absolute;
max-width: fit-content;
width: 80%;
`

export const LabelForm = styled.label `
 margin: 0 0 10px;
  display: block;
  font-size: 1.25em;
  color: #217093;
  font-weight: 600;
  font-family: inherit;
`
export const InputForm = styled.input `
  margin-bottom: 2em;
  padding: 0.3em 0.5em 0.4em;
  background-color: #f3fafd;
  border: solid 2px #217093;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 1.3em;
  color: #353538;
  font-weight: 600;
  font-family: inherit;
  transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
`

export const Btn = styled.button`
  margin: 0;
  padding: 0.5em;
  background-color: #4eb8dd;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none;
  width: 100%;
  height: 50px;
  font-size: 1.4em;
  color: #fff;
  font-weight: 600;
  font-family: inherit;
  transition: transform 0.1s ease-in-out, background-color 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background-color: #217093;
  }

  &:active {
    transform: scale(0.98);
  }
`


export const Cara  = styled.img `
    width: 150px;
    left: 50px;
    bottom: 100px;
    height: auto;
    position: absolute;
    animation: ${bounceAnimation} 4s infinite alternate;    
`
