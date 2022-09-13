import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";

export const ProductContext = createContext({
  currentProduct: { SHOP_DATA },
  // setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
