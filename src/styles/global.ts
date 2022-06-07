import { createGlobalStyle } from 'styled-components'
import { colors } from './variables'
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'

export const GlobalStyles = createGlobalStyle` 

    @font-face {
        font-family: 'Poppins' ;
        src: url(${PoppinsRegular});
        font-weight: 400;
    }

    @font-face {
        font-family: 'Poppins' ;
        src: url(${PoppinsBold});
        font-weight: 700;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body{
        min-height: 100vh;
        width: 100vw;
        background-color: ${colors.backgroundApp};
        font-family: "Poppins";
    }

    html {
        font-size: 62.5%;
        line-height: 1.15;
    }



`
