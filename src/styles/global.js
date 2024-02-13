import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{

    --color-grey-950: #f5f3ed;
    --color-grey-900: #DEE2E6;
    --color-grey-800: #CED4DA;
    --color-grey-600: #ADB5BD;
    --color-grey-500: #7C8B99;
    --color-grey-300: #343A40;
    --color-grey-100: #212529;

    --padding-default: 1rem;
    --padding-header: 1rem 0;
    --padding-input: 0 8px;
    --padding-button: 6px;

    --gap-default: 1rem;
    --gap-form: 8px;
    --gap-button-container: 8px;

    --radius-default: 4px;

    --button-icon-size: 24px;

}

`

export default GlobalStyle