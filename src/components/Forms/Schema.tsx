import * as yup from "yup";
export const Schema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  surname: yup.string().required("Campo obrigatório!"),
  cpf: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/, "Cpf inválido"),

  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  phone: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/[0-9]/, "Telefone inválido"),
  cep: yup
    .string()
    .required("Campo obrigatório!!")
    .matches(/^\d{5}-\d{3}$/, "CEP inválido"),
  street: yup.string().required("Campo obrigatório!!"),
  number: yup.string().required("Campo obrigatório!!"),
  city: yup.string().required("Campo obrigatório!!"),
  time: yup.string().required("Campo obrigatório!!"),
  date: yup.string().required("Campo obrigatório!!"),
});

export const SchemaPj = yup.object().shape({
  fantasyName: yup.string().required("Campo obrigatório!"),
  corporateName: yup.string().required("Campo obrigatório!"),
  cnpj: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "Cnpj inválido"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  phone: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/[0-9]/, "Telefone inválido"),
  cep: yup
    .string()
    .required("Campo obrigatório!!")
    .matches(/^\d{5}-\d{3}$/, "CEP inválido"),
  street: yup.string().required("Campo obrigatório!!"),
  number: yup.string().required("Campo obrigatório!!"),
  city: yup.string().required("Campo obrigatório!!"),
  time: yup.string().required("Campo obrigatório!!"),
  date: yup.string().required("Campo obrigatório!!"),
});
