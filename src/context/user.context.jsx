// To use context we have to first create a context we get from react
import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";

// the value I want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider is the actual component
// when we wrap any component inside the userProvider then that component has access to all the data inside the provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // Instead of using the useContext to store details of the authenticated user from the sign out and sign in
  // throughout the form in several places, we want to store them in a singular place here
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
