import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg';
import { ReactComponent as Github } from '../Assets/github.svg';

const NavHeader = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  justify-content: center;
`;

const Logo = styled.div`
  align-self: center;
  font-size: 2.5rem;
  color: #ff4446;
`;

const Ul = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin-right: 10px;
`;

const UlR = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-self: center;
`;

const Li = styled.li`
  font-size: 1.5rem;
  color: #fff;
  margin: 10px;

  &:hover {
    padding: 5px;
    background-color: #ff4446;
    font-weight: bold;
    border: solid 0px #ff4446;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ff4446;
  }
`;

const Nav = () => {
  return (
    <NavHeader>
      <Logo>Vitor Pablo</Logo>
      <Ul>
        <Li>Inicio</Li>
        <Li>Portfólio</Li>
        <Li>Sobre</Li>
      </Ul>
      <UlR>
        <Li>
          <Linkedin />
        </Li>
        <Li>
          <Github />
        </Li>
      </UlR>
    </NavHeader>
  );
};

export default Nav;
