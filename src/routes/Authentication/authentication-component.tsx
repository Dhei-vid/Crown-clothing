// To get the result of the redirect sign in we make use of useEffect hook
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignInForm from "../../components/sign-in-form/sign-in-form-component";
import SignUpForm from "../../components/sign-up-form/sign-up-form-components";

import { AuthenticationContainer } from "./authentication-styles";

const Authentication = () => {
  // Works with the google redirect method
  // import signInWithGoogleRedirect and auth from the firebase file we create
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   fetchdata();
  // }, []);

  /*
  - When we redirect the site to sign in (navigate away from the url), the website basically unmounts all functions implementations because it does not  know if you will return or not. And what happens is we initialize the page again from the beginning when we go back to it. As such the user data is not kept.
  - In order to track the information, we import and use the useEffect method from react and getRedirectResult from firebase auth
  - I'll comment this function because it does nothing and I will directly call the signInWithGoogleRedirect in the button
   */
  // const logGoogleRdirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   // const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(user);
  // };

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
