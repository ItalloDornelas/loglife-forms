import * as yup from "yup";
export const Schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(5, "Mínimo de 5 dígitos!"),
});
