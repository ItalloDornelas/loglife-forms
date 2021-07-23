import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  form {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 30px;
    color: var(--light-blue);
    font-size: 38px;
  }
`;
export const ContainerDates = styled.div`
  display: flex;
  flex-direction: column;
`;
