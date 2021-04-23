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
        background:#191819;
        font-size:20px;
        color:white;
        opacity:0.9;
    }
`;

export default GlobalStyles;
