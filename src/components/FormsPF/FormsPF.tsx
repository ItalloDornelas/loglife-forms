import { ContainerForm, ContainerDates } from "./styles";
// import { useHistory } from "react-router-dom";
import { typeClient } from "../../mock/typeClient";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { schema } from "../../components/FormsPF/Schema";
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Select from "../Select/Select";
import { states } from "../../mock/states";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //   const history = useHistory();
  const [valueCheck, setValueCheck] = useState({
    moto: true,
    caminhao: false,
    carro: false,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueCheck({ ...valueCheck, [event.target.name]: event.target.checked });
  };

  const onSubmitFunction = () => {};
  const { caminhao, carro, moto } = valueCheck;
  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <ContainerDates>
          <span>Tipo pessoa</span>
          <Select item={typeClient} />
        </ContainerDates>
        <RadioGroup aria-label="action">
          <span>Você é um cliente Ativo?</span>
          <FormControlLabel value="Ativo" control={<Radio />} label="Ativo" />
          <FormControlLabel
            value="Inativo"
            control={<Radio />}
            label="Inativo"
          />
        </RadioGroup>
        <Input
          register={register}
          label="Digite seu nome"
          name="username"
          error={errors.username?.message}
          placeholder="Digite seu nome"
          type="text"
        />
        <Input
          register={register}
          name="surname"
          label="Digite seu sobrenome"
          error={errors.surname?.message}
          placeholder="Digite seu sobrenome"
          type="text"
        />

        <Input
          label="Digite seu CPF"
          register={register}
          name="cpf"
          error={errors.cpf?.message}
          placeholder="Ex.:000.000.000-00"
          type="text"
        />
        <Input
          label="Digite seu email"
          register={register}
          name="email"
          error={errors.email?.message}
          placeholder="Digite seu email"
          type="text"
        />
        <Input
          label="Digite seu telefone"
          register={register}
          name="phone"
          error={errors.phone?.message}
          placeholder="Ex.: (00) 0000-0000"
          type="text"
        />
        <Input
          label="Digite seu Cep"
          register={register}
          name="cep"
          error={errors.cep?.message}
          placeholder="Ex.: 00000-000"
          type="text"
        />
        <Input
          label="Digite sua rua"
          register={register}
          name="street"
          error={errors.street?.message}
          placeholder="Digite o nome da sua rua"
          type="text"
        />
        <Input
          label="Digite o numero"
          register={register}
          name="number"
          error={errors.number?.message}
          placeholder="Ex.: 000"
          type="text"
        />
        <Input
          label="Digite sua cidade"
          register={register}
          name="city"
          error={errors.city?.message}
          placeholder="Sua cidade"
          type="text"
        />
        <ContainerDates>
          <span>Escolha seu estado</span>
          <Select item={states} />
        </ContainerDates>

        <ContainerDates>
          <span>Horário abertura da loja</span>
          <Input
            register={register}
            name="time"
            error={errors.time?.message}
            type="time"
          />
        </ContainerDates>
        <ContainerDates>
          <span>Dia de atendimento</span>
          <Input
            register={register}
            name="date"
            error={errors.date?.message}
            type="date"
          />
        </ContainerDates>
        <ContainerDates>
          <span>Veículos utilizados</span>
          <FormControlLabel
            control={
              <Checkbox
                checked={caminhao}
                name="Caminhao"
                onChange={handleChange}
              />
            }
            label="Caminhão"
          />
          <FormControlLabel
            control={
              <Checkbox checked={carro} name="Carro" onChange={handleChange} />
            }
            label="Carro"
          />
          <FormControlLabel
            control={
              <Checkbox checked={moto} name="Moto" onChange={handleChange} />
            }
            label="Moto"
          />
        </ContainerDates>
        <Button />
      </form>
    </ContainerForm>
  );
};
export default Register;
