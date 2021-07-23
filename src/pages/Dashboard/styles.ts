import styled from "styled-components";
import { Container } from "@material-ui/core";

export const ContainerStyled = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 60vh;
  padding-left: 5px;
  color: var(--red);
`;
export const ContentDashboard = styled.div`
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
