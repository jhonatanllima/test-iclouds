import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;  

  p{

    font-family: "Century Gothic", "Roboto Slab", sans-serif;
    font-style: bold;
    line-height: 1.8;
  }
  span {
      color: orange;
      font-weight: 400;
    }
`;

export const ImgBook   = styled.div`
  margin: auto;
  max-width: 700px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  

  img   {
    width: 100px;
    height: auto;
    margin: 10px 10px;
    border-radius: 4px;
  }

  p {
    color: orange;
    font-size: 0.5rem;
  }
`;
