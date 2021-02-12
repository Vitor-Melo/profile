import React from 'react';
import styled from 'styled-components';

const DivProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: end;
  margin: 0 auto;
  margin-top: 36px;
  height: 300px;
  width: 50%;
`;

const CardProject = styled.div`
  border-radius: 5px;
  background-color: #fff;

  &:hover {
    padding: 10px;
    box-shadow: 0px 0px 5px #000;
  }
`;

const Project = () => {
  return (
    <DivProject>
      <CardProject></CardProject>
      <CardProject></CardProject>
    </DivProject>
  );
};

export default Project;
