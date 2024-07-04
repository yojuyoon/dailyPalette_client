import * as yup from "yup";

export const signUpschema = yup
  .object({
    email: yup.string().required(),
    name: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
