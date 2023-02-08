import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }

    body{
        background-color: ${({ theme }) => theme['gray-900']};
        font-size: 1rem;
        font-family: 'Nunito', sans-serif;
    }

`
