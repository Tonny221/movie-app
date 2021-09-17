import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --white: #fff;
    }

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body{
        min-height: 100vh;
    }
`