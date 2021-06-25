import * as Yup from "yup";
import TextInput from "../../components/TextInput";

export const fields = [
  {
    name: "name",
    component: TextInput,
    placeholder: "Name",
    value: "",
  },
  {
    name: "email",
    component: TextInput,
    placeholder: "Email",
    value: "",
  },
  {
    name: "password",
    component: TextInput,
    type: "password",
    placeholder: "Password",
    value: "",
  },
  {
    name: "confirm_password",
    component: TextInput,
    type: "password",
    placeholder: "Confirm Password",
    value: "",
  },
];

export const initialValues = fields.reduce((p, c) => {
  return { ...p, [c.name]: c.name };
}, {});

export const registerSchema = Yup.object().shape({
  name: Yup.string().min(3).max(255).required(),

  email: Yup.string().min(3).max(255).required().email(),
  password: Yup.string()
    .required()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
