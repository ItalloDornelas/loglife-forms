import { useHistory } from "react-router";
import Button from "../../components/Button/Button";
import { Container, Content } from "./styles";
function Home() {
  const history = useHistory();
  const handleNavegation = (path: string) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavegation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavegation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
