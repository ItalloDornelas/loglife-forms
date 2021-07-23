import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

export const AppBarStyled = styled.header<{ openMenu: boolean }>`
  transition: all 0.5s ease-out;
  justify-content: center;
  width: 100%;
  background: var(--dark-blue);
  h1 {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 1rem;
  }
  h2 {
    color: var(--vanilla);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    text-transform: uppercase;
    cursor: pointer;
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
  color: var(--white);
  @media (min-width: 888px) {
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
  width: 100%;
  background: var(--white);
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 3;
  top: 85px;
  @media (min-width: 888px) {
    background: transparent;
    position: relative;
    top: 10px;
  }
  transition: 0.5s;
  ul {
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 888px) {
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
    color: var(--red);
    transition: 0.3s;
    letter-spacing: 0.02rem;
    @media (min-width: 888px) {
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
      color: var(--red);
      border: 1px var(--red) solid;
      letter-spacing: 0.1rem;
    }
  }
`;
