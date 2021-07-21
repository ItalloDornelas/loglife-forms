import styled from "styled-components";
interface redSchemaProps {
  redSchema: boolean;
}
export const Container = styled.button<redSchemaProps>`
  background: ${(props) => (props.redSchema ? "#c53030" : "#252744")};
  color: ${(props) => (props.redSchema ? "#f5f5f5" : "#c53030")};
  height: 45px;
  border: none;
  border-radius: 8px;
  width: 80%;
  margin: 10px auto;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--white);
    color: var(--vanilla);
  }
`;
