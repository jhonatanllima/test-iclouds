import React from 'react';

import { Container } from './styles';

import clapGrey from '../../themes/assets/clap-gray-3@2x.png';
import whatsApp from '../../themes/assets/if-whatsapp-853339@2x.png';
import faceBook from '../../themes/assets/if-entoni-facebook-330869@2x.png';
import Twitter from '../../themes/assets/twiter@2x.png';
import Linkedin from '../../themes/assets/if-linkedin-853357@2x.png';
import Email from '../../themes/assets/mail@2x.png';

export default function Header() {
  return (
    <Container>
      <div>
        <a href="http://localhost:3000/" >
          <img src={clapGrey} alt="Curtir" />
        </a>

        <p>37</p>
      </div>

      <a href="https://web.whatsapp.com/">
        <img
          src={whatsApp}
          alt="WhatsApp"
        />
      </a>

      <a href="https://www.facebook.com/jhonyllima" >
        <img
          className="img-facebook"
          src={faceBook}
          alt="Facebook"
        />
      </a>

      <a href="https://twitter.com/">
        <img src={Twitter} alt="Twitter"  />
      </a>

      <a href="https://www.linkedin.com/in/jhonatan-lima-75a2a0142/" >
        <img
          src={Linkedin}
          alt="Linkedin"
        />
      </a>

      <a href="https://gmail.com " >
        <img src={Email} alt="E-mail" />
      </a>
        
    </Container>
  );
}
