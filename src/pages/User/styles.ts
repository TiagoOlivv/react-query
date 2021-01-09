import styled from 'styled-components';

export const Container = styled.ul`
  padding: 20px 70px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 90px;
    border-radius: 8px;

    padding: 0 10px 0 20px;

    & + li {
      margin-top: 10px;
    }

    strong {
      font-size: 24px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        margin-left: 10px;
      }
    }

    @media only screen and (max-width: 600px) {
      button {
        width: 90px;
      }

      strong {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 12px;
  }
`;
