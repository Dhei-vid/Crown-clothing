// To use context we have to first create a context we get from react
import { createContext, useState } from "react";

// the value I want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider is the actual component
// when we wrap the any component inside the userProvider then that component has access to all the data inside the provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
