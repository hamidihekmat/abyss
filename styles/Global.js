import { css } from '@emotion/react';

export const GlobalCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;
