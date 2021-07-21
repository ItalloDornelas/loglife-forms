import { useHistory } from "react-router";
import Button from "../../components/Button/Button";

import { Container, Content } from "./styles";
const Home = () => {
  const history = useHistory();
  const handleNavegation = (path: string) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          Log<span>.</span>Life
        </h1>
        <span>Conheça nossos serviços</span>
        <div>
          <Button onClick={() => handleNavegation("/login")}>Entrar</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
