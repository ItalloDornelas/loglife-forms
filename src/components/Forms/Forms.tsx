import { ContainerForm, Wrapper, WrapperCheck } from "./styles";
import { useHistory } from "react-router-dom";
import { typeClient } from "../../mock/typeClient";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { Schema, SchemaPj } from "./Schema";
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import Select from "../Select/Select";
import { states } from "../../mock/states";
import { ChangeEvent, useState } from "react";
import { useValueInput } from "../../provider/valueInput/valueInput";
import { useCards } from "../../provider/card/card";
import CardsProps from "../../model/CardsProps";

const Forms = () => {
  const { valueInput } = useValueInput();
  const { setCard, card } = useCards();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      valueInput === "PF - Pessoa Física" ? Schema : SchemaPj
    ),
  });

  const [valueCheck, setValueCheck] = useState({
    moto: true,
    caminhao: false,
    carro: false,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueCheck({ ...valueCheck, [event.target.name]: event.target.checked });
  };
  const { caminhao, carro, moto } = valueCheck;
  const newError = [moto, caminhao, carro].filter((v) => v).length < 1;
  const [valueRadio, setValueRadio] = useState("Ativo");

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio((event.target as HTMLInputElement).value);
  };
  const history = useHistory();
  const onSubmitFunction = (data: CardsProps) => {
    setCard([...card, data]);
    history.push("/listMembers");
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Wrapper>
          <span>Tipo pessoa</span>
          <Select name="typePerson" register={register} item={typeClient} />
        </Wrapper>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="action"
            value={valueRadio}
            onChange={handleChangeRadio}
          >
            <span>Você é um cliente Ativo?</span>
            <FormControlLabel value="Ativo" control={<Radio />} label="Ativo" />
            <FormControlLabel
              value="Inativo"
              control={<Radio />}
              label="Inativo"
            />
          </RadioGroup>
        </FormControl>
        {valueInput === "PF - Pessoa Física" ? (
          <Input
            key={"username"}
            register={register}
            label="Digite seu nome"
            name="username"
            error={errors.username?.message}
            placeholder="Digite seu nome"
            type="text"
          />
        ) : (
          <Input
            register={register}
            label="Nome fantasia"
            name="fantasyName"
            error={errors.fantasyName?.message}
            placeholder="Nome fantasia"
            type="text"
          />
        )}
        {valueInput === "PF - Pessoa Física" ? (
          <Input
            register={register}
            name="surname"
            label="Digite seu sobrenome"
            error={errors.surname?.message}
            placeholder="Digite seu sobrenome"
            type="text"
          />
        ) : (
          <Input
            register={register}
            name="corporateName"
            label="Razão social"
            error={errors.corporateName?.message}
            placeholder="Razão social"
            type="text"
          />
        )}
        {valueInput === "PF - Pessoa Física" ? (
          <Input
            label="Digite seu CPF"
            register={register}
            name="cpf"
            error={errors.cpf?.message}
            placeholder="Ex.:000.000.000-00"
            type="text"
          />
        ) : (
          <Input
            label="Digite seu CNPJ"
            register={register}
            name="cnpj"
            error={errors.cnpj?.message}
            placeholder="Ex.:00.000.000/0000-00"
            type="text"
          />
        )}

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
        <Wrapper>
          <span>Escolha seu estado</span>
          <Select name="states" register={register} item={states} />
        </Wrapper>

        <Wrapper>
          <span>Horário abertura da loja</span>
          <Input
            register={register}
            name="time"
            error={errors.time?.message}
            type="time"
          />
        </Wrapper>
        <Wrapper>
          <span>Dia de atendimento</span>
          <Input
            register={register}
            name="date"
            error={errors.date?.message}
            type="date"
          />
        </Wrapper>

        <FormControl error={newError} component="fieldset">
          <FormLabel component="legend">Veículos utilizados</FormLabel>
          <WrapperCheck>
            <FormControlLabel
              control={
                <Checkbox
                  checked={caminhao}
                  name="caminhao"
                  onChange={handleChange}
                />
              }
              label="Caminhão"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={carro}
                  name="carro"
                  onChange={handleChange}
                />
              }
              label="Carro"
            />
            <FormControlLabel
              control={
                <Checkbox checked={moto} name="moto" onChange={handleChange} />
              }
              label="Moto"
            />
          </WrapperCheck>
          <FormHelperText>{newError && "Campo obrigatório!!"}</FormHelperText>
        </FormControl>
        <Button type="submit" form="hook-form">
          Cadastrar
        </Button>
      </form>
    </ContainerForm>
  );
};
export default Forms;
