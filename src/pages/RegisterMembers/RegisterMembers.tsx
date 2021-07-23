import Forms from "../../components/Forms/Forms";
import { ContainerForm, ContainerOut } from "./styles";

const Register = () => {
  return (
    <ContainerOut>
      <ContainerForm>
        <h2>Cadastre-se</h2>
        <h4>Escolha as opções</h4>
        <Forms />
      </ContainerForm>
    </ContainerOut>
  );
};
export default Register;
