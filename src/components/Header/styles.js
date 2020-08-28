import styled from 'styled-components';

export const Container = styled.header`
  max-width: 900px;
  margin: 40px auto;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 50px;
    border-radius: 50%;
  }

  h1 {
    color: #000;
    padding: 15px;
    text-transform: uppercase;
  }

  h2 {
    color: #c9c9c9;
    font-size: 15px;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 60px;

  text-transform: uppercase;

  p {
    display: flex;  
    font-size: 10px;
    margin-right: 30px;
    span {
      margin: 0 5px;
    }   
  }

  span {
    color: orange;
  }
`;
