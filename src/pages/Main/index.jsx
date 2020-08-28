import React from 'react';

import {
  Header,
  Nav, 
  Content,
} from '../../components';


import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <Header />
      <Nav />
      <Content />
    </Container>
  );
};

export default Main;
