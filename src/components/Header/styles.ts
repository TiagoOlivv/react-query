import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: #fff;

  button {
    text-align: center;
    width: 120px;
    height: 40px;
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
  }

  .cancel {
    color: #333;
    background-color: #eee;
    transition: color 0.4s;

    &:hover {
      color: #fff;
      background-color: #ff3333;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 8px 20px;
  }
`;
