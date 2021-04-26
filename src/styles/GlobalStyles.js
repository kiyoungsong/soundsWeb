import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background:#181919;
        font-size:20px;
        color:white;
        opacity:0.9;
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;
