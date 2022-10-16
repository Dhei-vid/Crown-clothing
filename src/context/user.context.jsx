// To use context we have to first create a react context
import { createContext, useEffect, useReducer } from "react";

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
// wrapping any component inside the userProvider makes that component have access to all the data inside the provider
export const UserProvider = ({ children }) => {
  // usereducer hook takes two arguments (the userReducer(any reducer function) function and the state value)
  // What we get back from the useReducer hook is the state value and a dispatch function (which you pass an action object)
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // const [currentUser, setCurrentUser] = useState(null);
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
