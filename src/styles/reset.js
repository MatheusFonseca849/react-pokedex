import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`

html,body,header,section,select,main,nav,div,ul,li,input,img,button,figure,h1,h2,h3,a,p{
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1rem;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-align: unset;
    scroll-behavior: smooth;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  button{
    cursor: pointer;
    width: fit-content;
    height: fit-content;
  }
`

export default Reset