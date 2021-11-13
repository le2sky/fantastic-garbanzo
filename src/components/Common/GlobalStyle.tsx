import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 500;

  }

  html,
  body,
  #___gatsby {
    height: 100%;
    background-color: black;
  }
  
  body{
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle;


