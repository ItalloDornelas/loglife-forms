import {
  ContainerFormAll,
  ContainerForm,
  ContainerRegister,
  Container,
  ContainerOut,
  Background,
} from "./styles";

import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(5, "Mínimo de 5 dígitos!")
      .required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  interface Auth {
    id?: number;
    email: string;
    password: string;
  }

  //   const history = useHistory();

  const onSubmitFunction = ({ email, password }: Auth) => {};

  return (
    <ContainerOut>
      <Background />
      <Container>
        <p style={{ margin: "5rem 1rem 0" }}>
          <Link to="/" style={{ color: "#444548" }}>
            Home
          </Link>
          <span> {">"} </span>
          <Link to="/login" style={{ color: " #4DBFF6" }}>
            Login
          </Link>
        </p>
        <ContainerFormAll>
          <ContainerRegister>
            <ContainerForm>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>LOGIN</h2>
                <Input
                  register={register}
                  name="email"
                  label="E-mail"
                  error={errors.username?.message}
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
                <Button whiteSchema>Entrar</Button>
                <h4>
                  Ainda não possui cadastro?
                  <Link to="/register">Cadastrar</Link>
                </h4>
              </form>
            </ContainerForm>
          </ContainerRegister>
        </ContainerFormAll>
      </Container>
    </ContainerOut>
  );
};
export default Login;
