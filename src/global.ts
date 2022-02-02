import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #e5e5e5;
        --header-background:#2E3440;
        --text-color: #000;
        --text-header: #949494;
        --highlight-button: #FFF4DA;
        --orange: #D08770;
        --yellow:#EBCB8B;
        --purple: #B48EAD;
        --green: #A3BE8C;
        --red: #BF616A;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(---text-color);
        
    }

    body, input, button{
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }

`;
