import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title.js';

function Experiences() {
  const Container = styled.div`
    width: 100vw;
    height: 120vh;
    background-color: #242e45;
  `;

  const Div = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
  `;

  const DivLeft = styled.div`
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 150px;
  `;

  const DivRight = styled.div`
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 150px;
  `;

  const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  `;

  const Text = styled.div`
    max-width: 300px;
  `;

  const NameEnterprise = styled.h5`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  `;

  const DescEnterprise = styled.p`
    font-size: 14px;
  `;

  return (
    <>
      <Container>
        <Div>
          <Title text="Experiências" />
        </Div>
        <Center>
          <Box>
            <DivLeft>
              <Text>
                <NameEnterprise>Nani Make Modas - 2019 a 2021</NameEnterprise>
                <DescEnterprise></DescEnterprise>
              </Text>
            </DivLeft>
            <DivRight>
              <Text>
                <NameEnterprise>Boni Makeup - 2018 a 2019</NameEnterprise>
                <DescEnterprise></DescEnterprise>
              </Text>
            </DivRight>
            <DivLeft>
              <Text>
                <NameEnterprise>
                  Tribunal de Justiça de São Paulo - 2017 a 2018
                </NameEnterprise>
                <DescEnterprise></DescEnterprise>
              </Text>
            </DivLeft>
            <DivRight>
              <Text>
                <NameEnterprise>
                  Attitude Contact Center - 2016 a 2016
                </NameEnterprise>
                <DescEnterprise></DescEnterprise>
              </Text>
            </DivRight>
          </Box>
        </Center>
      </Container>
    </>
  );
}

export default Experiences;
