import styled from "styled-components";
interface redSchemaProps {
  redSchema: boolean;
}
export const Container = styled.button<redSchemaProps>`
  background: ${(props) => (props.redSchema ? "#c53030" : "#252744")};
  color: var(--white);
  height: 45px;
  border: none;
  border-radius: 8px;
  width: 60%;
  margin: 10px auto;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--white);
    color: var(--vanilla);
  }
`;
