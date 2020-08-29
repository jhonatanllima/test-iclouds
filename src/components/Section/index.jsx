import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

import clapGrey from '../../themes/assets/clap-gray-3@2x.png';

import { Container, Header, Bottom } from './styles';

export default function Section() {
  return (
    <Container>
      <Header>

        <h1>Design Better. Faster. Together.</h1>
        
        <h2>
          Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizada desde o século XVII
          amet dollor aint.
        </h2>

      </Header>

  
        <Bottom>

            <p>
              <span>
                <FaRegCalendarAlt />
              </span>
              01/08/2019
              <span>
                <MdAccessTime />
              </span>
              7 min de leitura
            </p>

            <div>
              <a href="http://localhost:3000/" >
                <img src={clapGrey} alt="Curtir" />
              </a>

              <p>37</p>
            </div>

          <img src="https://avatars2.githubusercontent.com/u/39390551?s=460&u=781c6973bea8380b787e5e9fa46191c052fc2444&v=4" alt="perfil" />
          
        </Bottom>
   
    </Container>
  );
}
