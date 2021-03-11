import React from 'react';
import styled from 'styled-components';

function Attribute({ text }) {
  const Att = styled.p`
    padding: 4px 8px;
    text-align: center;
    background-color: #242e45;
    font-size: 1rem;
    color: #fff;
  `;

  return (
    <>
      <Att>{text}</Att>
    </>
  );
}

export default Attribute;
