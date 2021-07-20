import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

export const AppBarStyled = styled(AppBar)<{ openMenu: boolean }>`
  transition: all 0.5s ease-out;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 1rem;
    cursor: pointer;
  }
  h2 {
    color: var(--vanilla);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    text-transform: uppercase;
    span {
      color: var(--red);
    }
  }
  h2:hover {
    color: var(--white);
  }
`;

export const ToolbarStyled = styled(Toolbar)<{ openMenu: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h1 {
    transition: 0.5s;
    .icon {
      content: "x";
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
`;

export const Nav = styled.nav`
  width: 100vw;
  height: 92vh;
  background: var(--white);
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    background: transparent;
    height: 3rem;
  }
  transition: 0.5s;
  ul {
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
      height: 0;
    }
  }
  li {
    cursor: pointer;
    padding: 15px;
    text-transform: uppercase;
    list-style-type: none;
    font-size: 1.5rem;
    border-radius: 5px;
    font-weight: 600;
    color: var(--light-blue);
    transition: 0.3s;
    letter-spacing: 0.02rem;
    @media (min-width: 768px) {
      font-size: 1rem;
      letter-spacing: 0;
      padding: 0.5rem;
      color: var(--white);
      font-weight: 600;
      margin: 0.3rem;

      &:hover {
        letter-spacing: 0;
        border: none;
      }
    }

    &:hover {
      color: var(--light-blue);
      border: 1px var(--light-blue) solid;
      letter-spacing: 0.1rem;
    }
  }
`;
