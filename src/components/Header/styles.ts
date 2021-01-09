import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 80px;

  @media only screen and (max-width: 600px) {
    padding: 20px;

    button {
      width: 90px;
    }
  }
`;
