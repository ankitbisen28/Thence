import * as Yup from "yup";

export const RegisterSchema = Yup.object({
    name: Yup.string().min(5).required("Please enter your Name"),
    email: Yup.string().email().required("Please enter your Email"),
  });