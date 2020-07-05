import { createGlobalStyle } from "styled-components";
const theme = {
  primary: "var(--color-purple)",
  backgroundColor: "var(--color-white)",
  red: "var(--color-red)",
  black: "var(--color-black)",
  grey: "var(--color-grey)",
  lightgrey: "var(--color-lightgrey)",
  maxWidth: "var(--maxWidth)",
  boxShadow: "var(--boxShadow)",
};

const GlobalStyles = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-purple: #6700FE;
    --color-red: #FF0000;
    --color-black: #393939;
    --color-grey: #3A3A3A;
    --color-lightgrey: #E1E1E1;
    --maxWidth: 1000px;
    --boxShadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  }

  @font-face {
    font-family: SofiaPro;
    src: url('fonts/SofiaPro-ExtraLight.woff2') format('woff2'), url('fonts/SofiaPro-ExtraLight.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: SofiaPro;
    src: url('fonts/SofiaPro-Light.woff2') format('woff2'), url('fonts/SofiaPro-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: SofiaPro;
    src: url('fonts/SofiaPro-Regular.woff2') format('woff2'), url('fonts/SofiaPro-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: SofiaPro;
    src: url('fonts/SofiaPro-RegularItalic.woff2') format('woff2'), url('fonts/SofiaPro-RegularItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: SofiaPro;
    src: url('fonts/SofiaPro-Medium.woff2') format('woff2'), url('fonts/SofiaPro-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: SofiaPro;
    src: url('fonts/SofiaPro-Bold.woff2') format('woff2'), url('fonts/SofiaPro-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: SofiaPro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-family:  "Helvetica Neue", Arial, sans-serif, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  
    font-family: "Helvetica Neue", Arial, sans-serif, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
`;

export default GlobalStyles;
export { theme };
