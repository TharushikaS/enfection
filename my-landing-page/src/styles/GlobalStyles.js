import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "CustomFont";
    src: url("../assets/fonts/CustomFont.woff2") format("woff2");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "CustomFont", sans-serif;
  }

  body {
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
  }
`;

export default GlobalStyles;
