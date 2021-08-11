import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().email().required(),
  terms: yup.boolean().required(),
});

export default schema;
