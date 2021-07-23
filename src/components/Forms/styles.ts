import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 0.25rem;
    width: 95%;
    margin: 0 auto;
    padding: 0.5rem 0.5rem 0 0.5rem;
    background: var(--gray);
    gap: 19px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .MuiFormControl-root {
    margin-top: 0;
  }
`;
export const WrapperCheck = styled.div`
  display: flex;
`;
