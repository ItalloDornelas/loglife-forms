import styled from "styled-components";
interface WhiteSchemaProps {
  whiteSchema: boolean;
}
export const Container = styled.button<WhiteSchemaProps>`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")};
  color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-family: "Roboto Mono", monospace;
  width: 80%;
  margin: 10px auto;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--light-blue);
    color: var(--light-blue);
  }
`;
