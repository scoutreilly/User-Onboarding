/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import "./App.css";
import * as yup from "yup";
import schema from "./validation/formSchema";
import axios from "axios";

import Form from "./components/Form";

const baseFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const baseFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(baseFormValues);
  const [formErrors, setFormErrors] = useState(baseFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    schema.isValid(formValues).then((isSchemaValid) => {
      setDisabled(!isSchemaValid);
    });
  }, [formValues]);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        setUsers([...users, newUser]);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setFormValues(baseFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
        setDisabled(false);
      })
      .catch((e) => {
        setFormErrors({
          ...formErrors,
          [name]: e.message,
        });
        setDisabled(true);
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    postNewUser(newUser);
  };

  return (
    <div className="App">
      <Form
        disabled={disabled}
        values={formValues}
        errors={formErrors}
        submit={formSubmit}
        change={inputChange}
      />
    </div>
  );
}

export default App;
