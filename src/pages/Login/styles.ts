import styled, { keyframes } from "styled-components";
import ImgBackground from "../../assets/img/bg.jpg";

export const ContainerFormAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  text-align: center;
  overflow: hidden;
  @media (min-width: 571px) {
    flex-direction: row;
  }
`;

export const ContainerRegister = styled.div`
  width: 100%;
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 320px) {
    width: 75%;
  }

  @media (min-width: 520px) {
    width: 75%;
  }
  @media (min-width: 1100px) {
    width: 40%;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: var(--red);
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
  }
  h1 {
    color: var(--dark-blue);
  }
`;
const appearFromLeft = keyframes`
from{
    opacity:0;
    
    transform: translateX(-4%)
}
to{
    opacity:1;
    transform: translateX(0px)
}

`;

export const Background = styled.div`
  width: 50vw;
  height: auto;
  background: url(${ImgBackground}) no-repeat center #2d3997;
  animation: ${appearFromLeft} 2s;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

export const ContainerOut = styled.div`
  display: flex;
  width: 100vw;
`;
