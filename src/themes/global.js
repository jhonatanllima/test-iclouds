import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #fff;
  }

  body, input, button {
    font-family: "Century Gothic", "Roboto Slab", sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

`;
