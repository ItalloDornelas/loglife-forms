import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup.string().required("Campo obrigatório!"),
  surname: yup.string().required("Campo obrigatório!"),
  cpf: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/, "Cpf inválido"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  phone: yup.string().required("Campo obrigatório!"),
  cep: yup.string().required("Campo obrigatório!!"),
  street: yup.string().required("Campo obrigatório!!"),
  number: yup.string().required("Campo obrigatório!!"),
  state: yup.string().required("Campo obrigatório!!"),
  city: yup.string().required("Campo obrigatório!!"),
  time: yup.string().required("Campo obrigatório!!"),
  date: yup.string().required("Campo obrigatório!!"),
});
