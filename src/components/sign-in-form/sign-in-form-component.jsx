// I want to obtain data from the user document and store it inside the context.
// To do that I need a useContext hook and then bring in the context created

import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { button_type_classes } from "../button/button-component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {
  SignUpContainer,
  Header,
  ButtonContainer,
} from "./sign-in-form-styles.jsx";

// default fields
const defaultFormField = {
  email: "",
  password: "",
};

// create the markup...
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // authenticate user
  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else if (e.code === "auth/user-not-found")
        alert("Email does not exist");
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <Header>Already have an account?</Header>
      <h1>Sign In</h1>
      <form onSubmit={onHandleSubmit}>
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
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            button_type={button_type_classes.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
