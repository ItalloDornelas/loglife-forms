import {
  ContainerFormAll,
  ContainerForm,
  ContainerRegister,
  Container,
  ContainerOut,
  Background,
} from "./styles";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { useAuth } from "../../provider/auth/auth";
import { Schema } from "./Schema";

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  interface Auth {
    id?: number;
    email: string;
    password: string;
  }

  const history = useHistory();

  const onSubmitFunction = (data: Auth) => {
    login(data, history);
  };

  return (
    <ContainerOut>
      <Background />
      <Container>
        <ContainerFormAll>
          <ContainerRegister>
            <ContainerForm>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <span>Para acessar o conteúdo</span>
                <h2>Login</h2>
                <Input
                  register={register}
                  name="email"
                  label="E-mail"
                  error={errors.email?.message}
                  placeholder="E-mail"
                />
                <div>
                  <Input
                    type="password"
                    name="password"
                    label="Senha"
                    register={register}
                    error={errors.password?.message}
                    placeholder="Password"
                  />
                </div>
                <Button type="submit">Entrar</Button>
              </form>
            </ContainerForm>
          </ContainerRegister>
        </ContainerFormAll>
      </Container>
    </ContainerOut>
  );
};
export default Login;
