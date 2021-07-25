import styled from "styled-components";

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.5rem;
  padding: 1rem 1rem 2rem 1rem;
  color: var(--dark-blue);
`;
export const CardContainer = styled.div`
  height: 350px;
  width: 95%;
  display: flex;
  padding: 1rem 1rem 2rem 1rem;
  text-align: center;
  margin: 0 auto;
  background: var(--dark-blue);
  border-radius: 7px;
  .MuiDataGrid-root {
    margin: 0 auto;
    color: var(--light-blue);
    font-weight: 700;
  }
  .MuiTypography-root {
    color: var(--vanilla);
  }
  .MuiTablePagination-actions {
    color: var(--red);
  }
`;
export const ContainerNull = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
  h1 {
    color: var(--dark-blue);
    padding: 1rem 1rem 2rem 1rem;
  }
`;

export const ContainerButton = styled.div`
  width: 80px;
`;
