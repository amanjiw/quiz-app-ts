import styled, { createGlobalStyle } from "styled-components";
import bg from "./images/1.jpg";

export const GlobalStyle = createGlobalStyle`

html{

    height: 100%;
}

body{
    background-image: url(${bg});
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}


*{
    box-sizing: border-box;
    font-family:sans-serif;
}


`;

export const Wrapper = styled.div``;
