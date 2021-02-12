import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const HeaderNav = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80px;
`;

function Header() {
  return (
    <HeaderNav>
      <Nav />
    </HeaderNav>
  );
}

export default Header;
