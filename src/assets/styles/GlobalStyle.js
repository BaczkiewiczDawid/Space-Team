import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
    html {
        box-sizing: border-box;
    }
    
    *, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.background};
    }
    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;