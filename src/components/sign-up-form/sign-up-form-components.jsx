import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";

import "./sign-up-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    // confirm password is the same
    if (password !== confirmPassword) {
      return alert("Password does not match");
    }

    try {
      // check if user has been authenticated with email and password
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // create user documents
      const userDoc = await createUserDocumentFromAuth(response.user, {
        displayName,
      });

      resetFormFields();
      console.log(userDoc);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account?</h2>
      <h1> Sign Up with your email and password </h1>
      <form onSubmit={onHandleSubmit}>
        <FormInput
          label="Display Name"
          inputProps={{
            type: "text",
            required: true,
            onChange: onChangeHandler,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="email"
          inputProps={{
            type: "email",
            required: true,
            onChange: onChangeHandler,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputProps={{
            type: "password",
            required: true,
            onChange: onChangeHandler,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputProps={{
            type: "password",
            required: true,
            onChange: onChangeHandler,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
