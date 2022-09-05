import { useState } from "react";

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

  // console.log(formFields);

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
      const userDoc = createUserDocumentFromAuth(response.user);
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
    <div>
      <h1> Please Sign Up with your email and password </h1>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor=""> Name </label>
        <input
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

        <label htmlFor=""> email </label>
        <input
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <label htmlFor=""> password </label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <label htmlFor=""> Confirm password </label>
        <input
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
