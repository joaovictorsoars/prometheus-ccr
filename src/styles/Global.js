import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  } 

  span, p, h1 {
    font-size: 26px;
  }
`;

export default GlobalStyles;