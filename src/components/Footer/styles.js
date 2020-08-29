import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 700px;
  margin: auto;

  p{
        padding: 10px;
        color: #a1a1a1;
        font-weight: 700;
        text-transform: uppercase;
      }

  div{
    max-width: 50%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

      span {

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        border-radius: 8px;
        border: 1px solid orange;

        color: orange;
        padding: 10px;
        font-size: 15px;
      }
  }

`;

