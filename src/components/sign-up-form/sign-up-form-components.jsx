import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { button_type_classes } from "../button/button-component";

import { SignUpContainer, Header } from "./sign-up-form.styles.jsx";

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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // create user documents
      const userDoc = await createUserDocumentFromAuth(user, {
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
    <SignUpContainer>
      <Header> Don't have an account?</Header>
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

        <Button button_type={button_type_classes.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
