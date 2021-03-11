import React from 'react';
import styled from 'styled-components';

function Title({ text }) {
  const Text = styled.h2`
    display: inline-block;
    margin: 4rem 0 2rem 0;
    padding: 12px 24px;
    border-radius: 5px;
    color: #ff4446;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
  `;

  return (
    <>
      <Text>{text}</Text>
    </>
  );
}

export default Title;
