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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
