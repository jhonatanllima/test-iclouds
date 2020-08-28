import React from 'react';

import data from './data';

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
      <Content data={data[0]}/>
      <Content data={data[1]}/>
      <Coments />
     <Content data={data[1]}/>  
    </Container>
  );
};

export default Main;
