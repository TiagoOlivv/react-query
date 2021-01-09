import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #eee;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    border: none;
  }

  button {
    cursor: pointer;

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
    transition: color 0.4s;

    &:hover {
      color: #000;
      background-color: #ff3333;
    }
  }
`;
