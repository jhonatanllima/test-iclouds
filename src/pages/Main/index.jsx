import React from 'react';

import {
  Header,
  Nav, 
  Content,
  Coments,
} from '../../components';


import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <Header />
      <Nav />
      <Content />
      <Coments />
    </Container>
  );
};

export default Main;
