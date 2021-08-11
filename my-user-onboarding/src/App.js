import { useState } from "react";
import "./App.css";
// import * as yup from "yup";
import axios from "axios";

import Form from "./components/Form";

const baseFormValues = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

const baseFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(baseFormValues);
  const [formErrors, setFormErrors] = useState(baseFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
