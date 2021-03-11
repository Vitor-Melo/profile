import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';

const steps = [
  'Olá 👋',
  1000,
  'Sou Vitor',
  1000,
  'Sou Desenvolvedor Fullstack Junior ',
  1000,
];

function Home() {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <>
      <Container className="gradient">
        <Typical
          wrapper="span"
          steps={steps}
          loop={Infinity}
          className="content"
        />
      </Container>
    </>
  );
}

export default Home;
