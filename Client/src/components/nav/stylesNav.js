import styled from "styled-components";
import { Link } from 'react-router-dom';

export const  NavStyle = styled.nav `
  transition: background-color 0.9s ease;
  z-index: 10000;
  padding: 15px;
  display: flex;
  gap: 5rem;
  height: 50px;
  position: fixed;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  left: 0px;
  right: 0px;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;