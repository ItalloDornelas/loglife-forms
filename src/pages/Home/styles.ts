import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh;
`;
export const Content = styled.div`
  max-width: 400px;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    color: var(--dark-blue);
    span {
      color: var(--red);
    }
  }
  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;
    button + button {
      margin-left: 1rem;
    }
  }
  span {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-wrap: wrap;
    color: var(--light-blue);
  }
`;
