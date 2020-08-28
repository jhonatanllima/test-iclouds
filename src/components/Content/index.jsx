import React from 'react';

import { Container } from './styles';

export default function Content({data}) {


  const dataContent = [data];
  console.log(dataContent);
  return (

    <Container >
      {dataContent.map(content => (
       <p key={content.id}>{content.description}</p>
      ))} 
     </Container>      
   
  );
}
