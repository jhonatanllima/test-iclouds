import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  margin: 30px auto;
  border-radius: 8px;
  box-shadow: 0 0 5px 1px #c9c9c9;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0;
  


  h1 {

    color: #333;
    padding-bottom: 10px;
    text-transform: uppercase;
  }

  h2 {
    line-height: 1.8;
    color: #c9c9c9;
    font-size: 0.8rem;
  }

  img {
    border-radius: 50%;
  }
`;

export const Bottom = styled.div`
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  div {
      display: flex;
        p {
          border-left: 1px solid #c9c9c9;
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

  p {
    font-size: 10px;
    span {
      margin:5px;
      color: orange;
    }
  }

  img {
    width: 50px;
    border-radius: 50%;
  }
`;
