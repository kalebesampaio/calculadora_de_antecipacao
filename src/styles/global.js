import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
ul, ol, li{
    list-style: none;
} 
img{
    max-width: 100%;
}
input, select{
    background: transparent;
    border: none;
}
body{
    height: 100vh;
    width: 100vw;

    #root{
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}


`;
