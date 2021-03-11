import React from 'react';
import styled from 'styled-components';

function Nav() {
  const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-content: center;
    margin-right: 24px;
    width: 100%;
    height: 60px;
  `;

  const Logo = styled.div`
    justify-self: start;
    padding-left: 4rem;
  `;

  const Ul = styled.ul`
    justify-self: center;
    display: flex;
    align-items: center;
    max-width: 60%;
  `;

  const Li = styled.li`
    margin: 0 12px;
    font-size: 0.9rem;
    color: #fff;
  `;

  return (
    <>
      <Nav>
        <Logo>
          <a href="#">
            <svg
              width="74"
              height="45"
              viewBox="0 0 81 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="17"
                width="79"
                height="45"
              >
                <path
                  d="M49.384 17.2L29.992 62H19.752L0.424 17.2H11.624L25.256 49.2L39.08 17.2H49.384Z"
                  fill="black"
                />
                <path
                  d="M58.704 17.2C62.672 17.2 66.1067 17.8613 69.008 19.184C71.952 20.5067 74.2133 22.384 75.792 24.816C77.3707 27.248 78.16 30.128 78.16 33.456C78.16 36.7413 77.3707 39.6213 75.792 42.096C74.2133 44.528 71.952 46.4053 69.008 47.728C66.1067 49.008 62.672 49.648 58.704 49.648H49.68V62H39.312V17.2H58.704ZM58.128 41.2C61.2427 41.2 63.6107 40.5387 65.232 39.216C66.8533 37.8507 67.664 35.9307 67.664 33.456C67.664 30.9387 66.8533 29.0187 65.232 27.696C63.6107 26.3307 61.2427 25.648 58.128 25.648H49.68V41.2H58.128Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask0)">
                <rect x="-19" y="3" width="116" height="81" fill="#FF4446" />
                <rect
                  x="-19"
                  y="3"
                  width="116"
                  height="81"
                  fill="url(#paint0_linear)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="39"
                  y1="3"
                  x2="39"
                  y2="84"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.453125"
                    stop-color="#FF4446"
                    stop-opacity="0.69"
                  />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </Logo>
        <Ul>
          <a href="#">
            <Li>Home</Li>
          </a>
          <a href="#">
            <Li>Apresentação</Li>
          </a>
          <a href="#">
            <Li>Experiências</Li>
          </a>
          <a href="#">
            <Li>Competências</Li>
          </a>
          <a href="#">
            <Li>Projetos</Li>
          </a>
        </Ul>
      </Nav>
    </>
  );
}

export default Nav;
