import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 30px;
  
  div {
      border-bottom: 1px solid #c9c9c9;

        p {
          padding: 5px;
          color: grey;
          font-weight: 800;
          }
        a {
           img{
               width: 30px;
               }
          }
    }

        a {
          align-items: center;
          justify-content: center;
          padding: 5px;
          
           img{
              width: 20px;
              align-self: center;
              }
          }


  `;
