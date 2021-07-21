import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ContainerStyled, ContentDashboard } from "./styles";

const Dashboard = () => {
  const history = useHistory();
  const handleNavegation = (path: string) => {
    return history.push(path);
  };
  return (
    <>
      <ContainerStyled>
        <h2>Seja bem vindo</h2>
        <ContentDashboard>
          <h1>
            Cadastre venha fazer parte da Log<span>.</span>Life
          </h1>
          <span></span>
          <div>
            <Button redSchema onClick={() => handleNavegation("/cadastro")}>
              Cadastrar
            </Button>
          </div>
        </ContentDashboard>
      </ContainerStyled>
    </>
  );
};
export default Dashboard;
