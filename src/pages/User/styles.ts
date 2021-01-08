import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 80px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
      margin-top: 10px;
    }
  }

  button {
    text-align: center;
    height: 20px;
    width: 80px;
    border-radius: 8px;
    text-decoration: none;
    color: #fff;
    background-color: #bebebe;
    font-weight: bold;

    transition: color 0.4s;

    &:hover {
      color: #333;
      background-color: #eee;
    }

    & + button {
      margin-left: 10px;
    }

    @media only screen and (max-width: 500px) {
      padding: 8px 20px;
    }
  }
`;
