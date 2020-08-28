import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 30px;
  position: absolute;
  top: calc(100vh - 50%);

  div {
      border-bottom: 1px solid #c9c9c9;

        p {
          display: flex;
          align-items: center;
          justify-content: center;
          color: grey;
          font-weight: 800;
          padding: 5px;
          margin: 5px;
          }
        a {
           img{
               width: 30px;
               }
          }
    }

        a {
          padding: 5px;
          margin: 5px;
           img{
              width: 20px;
              }
          }


  `;
