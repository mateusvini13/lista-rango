import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    transition: .3s;
  }

  *:focus {
    outline: 0;
  }

  html {
    min-height: calc(100vh);
  }

  body, #root {
    width: 100%;
    min-height: calc(100vh);
  }

  p {
    color: #404040;
    font-family: "Montserrat", sans-serif;
  }

  a {
    color: #404040;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  //Modal styles
  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 300ms ease-in-out;
      background: #00000033 !important;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
      background: #00000033 !important;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
      background: #00000033 !important;
  }
`;
