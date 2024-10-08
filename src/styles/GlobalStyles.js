import { css } from '@emotion/react';
import { theme } from 'styles/theme';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;

    margin: 0;
    background: ${theme.colors.mainBackground};
    min-height: 100vh;

    overflow-x: hidden;

    font-style: normal;
    cursor: default;
  }

  body.scroll-lock {
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
    text-decoration-skip-ink: auto;
    text-underline-offset: 4px;
  }

  code {
    font-family: Releway, monospace;
  }
  main {
    min-height: 930px;
  }

  .modal-lg {
    --bs-modal-width: 704px;
    /* width: 700px; */
  }

  .custom-scrollbar {
    &::-webkit-scrollbar {
      width: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.secGreen};
      border-radius: 10px;
      border: 4px solid ${theme.colors.beige};
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.colors.green};
    }

    /* &::-webkit-scrollbar-thumb:vertical {
      height: 36px; /* Встановлюємо висоту 
    } */

    &::-webkit-scrollbar-track {
      background-color: ${theme.colors.beige};
    }
  }
`;
