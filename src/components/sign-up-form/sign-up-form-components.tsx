import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button, { button_type_classes } from "../button/button-component";

import { SignUpContainer, Header } from "./sign-up-form.styles";
import { emailSignUpStart } from "../../store/user/user.action";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // confirm password is the same
    if (password !== confirmPassword) {
      return alert("Password does not match");
    }

    try {
      dispatch(emailSignUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).message === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button button_type={button_type_classes.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
