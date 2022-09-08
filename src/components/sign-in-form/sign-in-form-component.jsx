import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form-styles.scss";

// default fields
const defaultFormField = {
  email: "",
  password: "",
};

// create the markup
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  // authenticate user
  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

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
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
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

        <div className="btn--container">
          <Button type="submit">Sign In</Button>
          <Button type="button" button_type="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
