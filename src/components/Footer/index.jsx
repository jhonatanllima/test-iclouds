import React from 'react';

import data from './data.js';

import {
  Nav, 
} from '../../components';

import { Container } from './styles';

export default function Footer() {

  return (
    <Container>
        
          <p>Tags:</p>
            <div>
              {data.map((item, index) =>(
              <span key={index + 1}>{item}</span>
              ))}
            </div>
     
        <Nav navFooter/>
       
      

     </Container>
  );
}
