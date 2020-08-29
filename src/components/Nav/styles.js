import styled, {css} from 'styled-components';

export const Container = styled.nav`

  ${({navFooter}) => navFooter ? css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    text-decoration: none;

    div {
        p {
          color: grey;
          font-weight: 800;
          padding: 5px;
          margin: 5px;
          }
        a {
          text-decoration: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-left: 1px solid #c9c9c9;
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
  
  ` : css`

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 30px;
      position: fixed;
      top: calc(100vh - 65%);

  ${({navFooter}) => navFooter && css`
    flex-direction: row;
    position: absolute;
  `}

  div {
      border-bottom: 1px solid #c9c9c9;

        p {
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
          text-decoration: none;
          padding: 5px;
          margin: 5px;
           img{
              width: 20px;
              }
          }

  `}

  `;
