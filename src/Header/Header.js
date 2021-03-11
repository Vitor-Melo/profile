import React from 'react';
import styled from 'styled-components';
import Nav from './Nav.js';

function Header() {
  const HeaderNav = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
  `;

  return (
    <>
      <HeaderNav>
        <Nav />
      </HeaderNav>
    </>
  );
}

export default Header;
