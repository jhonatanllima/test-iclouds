import React from 'react';
import data from './data';

import { Container } from './styles';

export default function List() {
  return (
    <Container>
        {data.map((item, index) =>(
      <p key={index + 1}> <span>{index + 1}.</span> {item} </p>
      ))}
    </Container>
  );
}