import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    body {
        margin: 0px;
        padding: 0px;
        background:${({theme}) => theme.color.body};
        color: hsl(192, 100%, 9% );
        font-family: 'Courier New', Courier, monospace;
        font-size:1.15em;    

    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

`