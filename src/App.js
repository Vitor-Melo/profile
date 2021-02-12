import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './Header/Header';
import DivProject from './Project/Project';

const ContainerF = styled.div`
  background-color: #242e45;
  max-width: 100%;
  height: 650px;
  margin: 0;
`;

const ContainerS = styled.div`
  background-color: #e5e9ed;
  max-width: 100%;
  height: 650px;
  margin: 0;
  padding: 32px;
`;

const H1 = styled.h1`
  position: relative;
  max-width: 750px;
  font-size: 3rem;
  color: #fff;

  &:after {
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: pisca 0.7s infinite;
  }

  @keyframes pisca {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const DivTitle = styled.div`
  margin-top: 100px;
  margin-left: 60px;
  max-width: 750px;
  height: 320px;
`;

const ButtonPort = styled.div`
  position: relative;
  padding: 5px;
  background-color: #ff4446;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  border: solid 0px #ff4446;
  border-radius: 5px;
  max-width: 250px;
  height: 70px;
  margin: auto;
  top: -50px;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 5px #ff4446;
  }
`;

const Section = styled.div`
  margin: 0px auto;
  height: 50px;
  width: 170px;
  background: none;
  color: #ff4446;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const H3 = styled.h3`
  margin: 0px;
  padding: 0px;
`;

function App() {
  const title = React.useRef();

  React.useEffect(() => {
    title.current.innerHTML =
      'Olá, sou Vitor Pablo. Desenvolvedor Fullstack Junior';
    function typeWrite(title) {
      const textoArray = title.current.innerHTML.split('');
      title.current.innerHTML = ' ';
      textoArray.forEach(function (letra, i) {
        setTimeout(function () {
          title.current.innerHTML += letra;
        }, 100 * i);
      });
    }
    typeWrite(title);
  }, []);

  return (
    <>
      <ContainerF>
        <Header />
        <DivTitle>
          <H1 ref={title}></H1>
        </DivTitle>
        <ButtonPort>
          <p>veja meu portfólio</p>
        </ButtonPort>
      </ContainerF>
      <ContainerS>
        <Section>
          <H3>Projetos</H3>
        </Section>
        <DivProject />
      </ContainerS>
    </>
  );
}

export default App;
