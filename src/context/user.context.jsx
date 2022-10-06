// To use context we have to first create a react context
import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducers/reducers.utils";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";

// the value I want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  // the state value refers to the previous state value
  // the action takes two arguments, the type(could be string) and the payload (which is the new state value)
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error("Invalid action type: " + type);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

// provider is the actual component
// when we wrap any component inside the userProvider then that component has access to all the data inside the provider
export const UserProvider = ({ children }) => {
  // To use the usereducer hook takes two arguments (the userReducer(any reducer function) function and the state value)
  // What we get back from the useReducer hook is the state value and a dispatch function (which you pass an action object)
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

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
