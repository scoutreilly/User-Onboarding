import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("name required"),
  email: yup.string().email().required("email required"),
  password: yup.string().required("password required"),
  terms: yup.boolean().oneOf([true], "you must agree to terms to continue"),
});

export default schema;
