import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

html,
body,
header,
section,
select,
main,
nav,
div,
ul,
li,
img,
button,
input,
figure,
h1,
h2,
h3,
h4,
a,
p {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0;
    border: none;
    text-align: unset;
    font-family: 'Montserrat', sans-serif;
}

main {
    width: 100vw;
    height: fit-content;
    min-width: 320px;
    background-color: var(--color-grey-9);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-main);
}

button {
    cursor: pointer;
}

`